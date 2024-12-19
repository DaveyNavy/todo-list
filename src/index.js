import "./styles.css";
import { ToDoItem } from "./todo-item.js";
import { displayToDo } from "./display-todo.js";

let myToDo = new ToDoItem("Wash Dishes", "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolore earum delectus dignissimos eveniet rerum aspernatur soluta dolor molestiae nemo similique iste voluptatibus quae vero ut, necessitatibus iure ex assumenda.", "12/17/24", "High", ['a', 'b', 'c']);


displayToDo(myToDo);