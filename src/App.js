import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1 className="flex justify-center bg-red-500 text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="mx-auto bg-white-500 w-96">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
