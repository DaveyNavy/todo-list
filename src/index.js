import "./styles.css";
import { ToDoItem } from "./todo-item.js";
import { Project } from "./project.js";
import { ProjectList } from "./project-list.js";
import { displayToDo } from "./display-todo.js";
import { today } from "./today.js"
import { addToDo } from "./add-todo.js";
import { projects } from "./projects.js";
import { displayProject } from "./display-project.js";

let myToDo = new ToDoItem("Wash Dishes", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolore earum delectus dignissimos eveniet rerum aspernatur soluta dolor molestiae nemo similique iste voluptatibus quae vero ut, necessitatibus iure ex assumenda.", 
    "12/17/24", "High", ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.']);
let a = new ToDoItem("Lorem ipsum dolor sit amet consectetur", "myProject", "xx", new Date(), "hig h", []);
let b = new ToDoItem("tLorem ipsum dolor sit amet consectetur adipisicing eli tw0000000000000000000 0000000000000000000000000000000000000000000000o", "myProject", "yy", new Date(2024, 11, 20), "high", []);

let projectList = new ProjectList();
let myProject = new Project("My Project");
projectList.addProject(myProject);
myProject.addTask(a);
myProject.addTask(b);

today(projectList);
const addTaskButton = document.querySelector(".add-task");
addTaskButton.addEventListener("click", () => {
    addToDo(projectList);
});


const todayButton = document.querySelector(".today");
todayButton.addEventListener("click", () => {
    today(projectList);
});

const projectsButton = document.querySelector(".projects");
projectsButton.addEventListener("click", () => {
    projects(projectList);
});

