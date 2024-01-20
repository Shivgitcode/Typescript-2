import "./App.css";
// import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import { useState } from "react";
import Item from "./model/item";
import { v4 as uuid } from "uuid";
import ShoppingForm from "./components/ShoppingForm";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  function addItem(product: string, quantity: number) {
    setItems((prev) => {
      return [...prev, { id: uuid(), product: product, quantity: quantity }];
    });
  }

  return (
    <div>
      {/* <Greeter person="Colt"></Greeter>
      <Greeter person="Blue"></Greeter>
      <Greeter person="Elton"></Greeter> */}

      <ShoppingList items={items}></ShoppingList>
      <ShoppingForm addItem={addItem}></ShoppingForm>
    </div>
  );
}

export default App;
