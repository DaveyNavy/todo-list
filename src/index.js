import "./styles.css";
import { ToDoItem } from "./todo-item.js";
import { Project } from "./project.js";
import { ProjectList } from "./project-list.js";
import { displayToDo } from "./display-todo.js";
import { today } from "./today.js"

let myToDo = new ToDoItem("Wash Dishes", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolore earum delectus dignissimos eveniet rerum aspernatur soluta dolor molestiae nemo similique iste voluptatibus quae vero ut, necessitatibus iure ex assumenda.", 
    "12/17/24", "High", ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.']);


let projectList = new ProjectList();

today(projectList);


