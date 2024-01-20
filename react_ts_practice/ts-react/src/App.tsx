import "./App.css";
// import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
function App() {
  const items = [
    { id: 1, product: "Lemon", quantity: 3 },
    { id: 2, product: "Chicken Breast", quantity: 2 },
  ];
  return (
    <div>
      {/* <Greeter person="Colt"></Greeter>
      <Greeter person="Blue"></Greeter>
      <Greeter person="Elton"></Greeter> */}

      <ShoppingList items={items}></ShoppingList>
    </div>
  );
}

export default App;
