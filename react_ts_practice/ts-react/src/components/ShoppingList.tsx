import React from "react";

interface Item {
  id: number;
  product: string;
  quantity: number;
}

export default function ShoppingList({
  items,
}: {
  items: Item[];
}): JSX.Element {
  return (
    <div>
      <h1>ShoppingList</h1>
      <ul>
        {items.map((el) => {
          return (
            <li key={el.id}>
              {el.product}-{el.quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
