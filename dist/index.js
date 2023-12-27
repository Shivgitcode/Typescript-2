"use strict";
const input = document.querySelector("#todoitem");
const btn = document.querySelector("#btn");
const todoList = document.querySelector("#list");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    //   alert(input.value);
    const li = document.createElement("li");
    li.append(input.value);
    todoList.appendChild(li);
    input.value = "";
});
