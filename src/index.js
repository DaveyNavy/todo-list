import "./styles.css";
import { ToDoItem } from "./todo-item.js";
import { Project } from "./project.js";
import { ProjectList } from "./project-list.js";
import { displayToDo } from "./display-todo.js";
import { today } from "./today.js"
import { addToDo } from "./add-todo.js";
import { projects } from "./projects.js";
import { displayProject } from "./display-project.js";

let projectList = new ProjectList();
let myProject = new Project("My Project");
projectList.addProject(myProject);

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

