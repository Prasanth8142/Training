function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}