function App() {

  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome User</h1>;
  }

  return <h1>Please Login</h1>;
}

function App() {

  const isLoggedIn = false;

  return (
    <>
      {isLoggedIn
        ? <h1>Welcome</h1>
        : <h1>Login First</h1>}
    </>
  );
}