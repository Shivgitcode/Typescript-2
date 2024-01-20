import React from "react";
import { useRef } from "react";

interface FunctionProp {
  addItem(product: string, quantity: number): void;
}

export default function ShoppingForm(props: FunctionProp) {
  const inputref = useRef<HTMLInputElement>(null);
  const qtyref = useRef<HTMLInputElement>(null);
  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    console.log(inputref.current!.value);
    console.log(qtyref.current!.value);
    props.addItem(inputref.current!.value, parseInt(qtyref.current!.value));
    inputref.current!.value = "";
    qtyref.current!.value = "";
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" ref={inputref} />
        <input type="number" placeholder="qty" ref={qtyref} />
        <button>save</button>
      </form>
    </div>
  );
}
