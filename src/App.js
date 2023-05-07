import AddForm from "./AddForm";
import "./App.css";
import AvailableItems from "./AvailableItems";
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      <AddForm />
      <AvailableItems />
      <Cart />
    </div>
  );
}

export default App;
