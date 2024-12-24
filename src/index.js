import "./styles.css";
import { ToDoItem } from "./todo-item.js";
import { Project } from "./project.js";
import { ProjectList } from "./project-list.js";
import { today } from "./today.js"
import { addToDo } from "./add-todo.js";
import { projects } from "./projects.js";
import { displayProject } from "./display-project.js";
import { populateStorage } from "./populate-storage.js";
import { CheckListItem } from "./checklist-item.js";

let projectList = new ProjectList();
if (!localStorage.getItem("projectList")) {
    let myProject = new Project("My Project");
    projectList.addProject(myProject);
    populateStorage(projectList);
} 
else {
    let prevProjectList = JSON.parse(localStorage.getItem("projectList"));
    console.log(prevProjectList);
    prevProjectList["projectList"].forEach((project) => {
        let newProject = new Project(project["name"]);
        project["taskList"].forEach((task) => {
            console.log(task);
            let newChecklist = [];
            task["checklist"].forEach((checklistItem) => {
                newChecklist.push(new CheckListItem(checklistItem["description"], checklistItem["completed"]))
            })
            let newTask = new ToDoItem(task["title"], task["projectName"], task["description"], new Date(task["date"]), task["priority"], newChecklist, task["completed"]);
            newProject.addTask(newTask);
        })
        projectList.addProject(newProject);
    })
}
console.log(projectList);

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