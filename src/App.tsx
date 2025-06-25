import ListGroup from "./components/ListGroup";
function App() {
  let items = ["newyork", "london", "paris", "tokyo"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}
export default App;
