import "./styles.css";
import { ToDoItem } from "./todo-item.js";
import { Project } from "./project.js";
import { ProjectList } from "./project-list.js";
import { displayToDo } from "./display-todo.js";
import { today } from "./today.js"
import { addToDo } from "./add-todo.js";
import { projects } from "./projects.js"

let myToDo = new ToDoItem("Wash Dishes", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolore earum delectus dignissimos eveniet rerum aspernatur soluta dolor molestiae nemo similique iste voluptatibus quae vero ut, necessitatibus iure ex assumenda.", 
    "12/17/24", "High", ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.']);
let a = new ToDoItem("Lorem ipsum dolor sit amet consectetur", "myProject", "xx", new Date(), "high", []);
let b = new ToDoItem("tLorem ipsum dolor sit amet consectetur adipisicing elitwo", "myProject", "yy", new Date(2024, 11, 20), "high", []);

let projectList = new ProjectList();
let project = new Project("superProject");
project.addTask(a);
project.addTask(b);
project.addTask(a);
for (let i = 0; i < 10; i++)
    projectList.addProject(project);


today(projectList);

const addTaskButton = document.querySelector(".add-task");
addTaskButton.addEventListener("click", () => {
    addToDo(project);
});


const todayButton = document.querySelector(".today");
todayButton.addEventListener("click", () => {
    today(projectList);
});

const projectsButton = document.querySelector(".projects");
projectsButton.addEventListener("click", () => {
    projects(projectList);
});