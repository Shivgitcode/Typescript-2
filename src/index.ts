const input = document.querySelector("#todoitem")! as HTMLInputElement;
const btn = document.querySelector("#btn")! as HTMLButtonElement;
const todoList = document.querySelector("#list")!;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  //   alert(input.value);
  const li = document.createElement("li");
  li.append(input.value);
  todoList.appendChild(li);
  input.value = "";
});
