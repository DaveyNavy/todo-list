import { ToDoItem } from "./todo-item";
import { clear } from "./utility.js";
import { CheckListItem } from "./checklist-item.js";
import { populateStorage } from "./populate-storage.js";
import { projects } from "./projects.js";
import trash from "./images/trash.svg";

export function addToDo(projectList) {
    clear();

    const container = document.querySelector(".content");

    const div = document.createElement("div");
    div.classList.add("add-todo");

    const form = document.createElement("form");
    div.appendChild(form);

    const title = document.createElement("input");
    title.setAttribute("placeholder", "Title");
    title.setAttribute("id", "title");
    title.setAttribute("name", "title");
    form.appendChild(title);

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("form-item");

    const projectLabel = document.createElement("label");
    projectLabel.textContent = "Project: ";

    const project = document.createElement("select");
    project.setAttribute("id", "project");
    project.setAttribute("name", "project");

    const currProjects = projectList.getProjectList();
    currProjects.forEach(element => {
        const option = document.createElement("option");
        option.setAttribute("value", element.getName());
        option.textContent = element.getName();
        project.appendChild(option);
    })
    projectDiv.appendChild(projectLabel);
    projectDiv.appendChild(project);
    form.appendChild(projectDiv);

    const description = document.createElement("textarea");
    description.setAttribute("placeholder", "Description");
    description.setAttribute("id", "description");
    description.setAttribute("name", "description");
    form.appendChild(description);

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("form-item");
    const date = document.createElement("input");
    date.setAttribute("id", "date");
    date.setAttribute("type", "date");
    date.setAttribute("name", "date");

    dateDiv.appendChild(date);
    form.appendChild(dateDiv);

    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("form-item");

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority: ";

    const priority = document.createElement("select");
    priority.setAttribute("id", "priority");
    priority.setAttribute("name", "priority");

    const priorities = ["High", "Normal", "Low"];
    priorities.forEach(element => {
        const option = document.createElement("option");
        option.setAttribute("value", element);
        option.textContent = element;
        priority.appendChild(option);
    })

    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(priority);
    form.appendChild(priorityDiv);


    const button = document.createElement("button");
    button.textContent = "+ Add Subtask";
    button.setAttribute("type", "button");

    const subtaskDiv = document.createElement("div");
    subtaskDiv.classList.add("subtask");
    let subtaskNumber = 0;

    let checkListItems = [];
    button.addEventListener("click", () => {
        subtaskNumber++;

        const d = document.createElement("div");
        d.classList.add("form-item");

        const label = document.createElement("label");
        label.textContent = '•';

        const subtask = document.createElement("textarea");
        subtask.setAttribute("placeholder", "Subtask description");
        subtask.setAttribute("id", subtaskNumber);
        checkListItems.push(subtask);

        const trashIcon = document.createElement("img");
        trashIcon.setAttribute("src", trash);
        trashIcon.classList.add("icon-small");
        trashIcon.addEventListener("click", () => {
            checkListItems.splice(checkListItems.findIndex(e => e.id == subtask.id), 1);
            d.remove();
        })

        d.append(trashIcon);
        d.appendChild(label);
        d.appendChild(subtask);

        subtaskDiv.appendChild(d);
    })
    form.appendChild(subtaskDiv);
    form.appendChild(button);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Save";
    form.appendChild(submitButton);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let formData = new FormData(form);
        let data = Object.fromEntries(formData.entries());

        let toDoChecklist = checkListItems.map(e => new CheckListItem(e.value, false));
        let newToDo = new ToDoItem(data["title"], data["project"], data["description"], new Date(data["date"]+"T00:00:00"), data["priority"], toDoChecklist);
        
        projectList.findProject(data["project"]).addTask(newToDo);
        populateStorage(projectList);

        projects(projectList);
    })

    container.appendChild(div);
}