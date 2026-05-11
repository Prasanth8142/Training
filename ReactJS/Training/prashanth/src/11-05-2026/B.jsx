import React, { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // Handle HTTP errors
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Loading State
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Error State
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Display Data
  return (
    <div style={styles.container}>
      <h1>Posts</h1>

      {data.map((post) => (
        <div key={post.id} style={styles.card}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: "80%",
    margin: "20px auto",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
};

export default FetchData;