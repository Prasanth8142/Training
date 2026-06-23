import useCounter from './A'

function App() {
  const { count, increment } = useCounter(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default App;