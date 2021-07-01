import store from "./redux/store";
import { addTodo, deleteTodo } from "./redux/todoSlice";

const todoInput = document.querySelector("input");
const addbtn = document.querySelector("button");
const listElement = document.getElementById("list");
const ulListElement = document.createElement("ul");
ulListElement.className = "list-group";

function listings() {
  let len = store.getState().todos.length;
  ulListElement.innerHTML = "";
  for (let i = 0; i < len; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = store.getState().todos[i].title;
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";

    const btns = document.createElement("button");
    btns.innerText = "Delete";
    let temp = store.getState().todos[i].todoId;
    btns.id = temp;
    btns.className = "btn btn-danger";
    btns.addEventListener("click", (e) => {
      let ids = e.target.id;
      store.dispatch(
        deleteTodo({
          todoId: ids,
        })
      );
      console.log("delete", store.getState().todos);
      listings();
    });
    listItem.appendChild(btns);
    listElement.appendChild(ulListElement);
    ulListElement.appendChild(listItem);
  }
}

addbtn.addEventListener("click", () => {
  store.dispatch(
    addTodo({
      title: todoInput.value,
    })
  );
  todoInput.value = "";
  listings();
});
