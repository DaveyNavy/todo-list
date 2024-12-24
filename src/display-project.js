import { clear } from "./utility";
import { format } from "date-fns";
import { displayToDo } from "./display-todo";
import trash from "./images/trash.svg"
import { projects } from "./projects";
import { populateStorage } from "./populate-storage";

export function displayProject(projectList, project) {
    clear();
    const container = document.querySelector(".content");

    const div = document.createElement("div");
    div.classList.add("project-item");

    const titleDiv = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = project.getName();


    titleDiv.appendChild(title);
    div.appendChild(titleDiv);
    if (project.getName() != "My Project") {
        const trashIcon = document.createElement("img");
        trashIcon.setAttribute("src", trash);
        trashIcon.classList.add("icon");
        trashIcon.addEventListener("click", () => {
            projectList.removeProject(project);
            projects(projectList);
            populateStorage(projectList);
        })
        titleDiv.appendChild(trashIcon);
    }
    titleDiv.classList.add("todo-item-title");


    const form = document.createElement("form");
    project.getTasks().forEach((element, index) => {
        const d = document.createElement("div");
        d.classList.add("project-item-div");
        const checklistDiv = document.createElement("div");
        checklistDiv.classList.add("checklist-item");

        const label = document.createElement("label");
        label.setAttribute("for", "item" + index);
        label.textContent = element.getTitle();

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", "item" + index);
        input.addEventListener("change", function() {
            if (this.checked) {
                element.setCompleted(true);
            } else {
                element.setCompleted(false);
            }
            populateStorage(projectList);
        })
        if (element.isCompleted()) input.setAttribute("checked", "checked");

        const date = document.createElement("p");
        console.log(element.getDate());
        date.textContent = element.getDate() != 'Invalid Date'? format(element.getDate(), "EEE, LLL d, y") : '';
        date.classList.add("project-item-date");

        checklistDiv.appendChild(input);
        checklistDiv.appendChild(label);
        
        checklistDiv.addEventListener("click", () => {
            displayToDo(projectList, project, element);
        })

        d.appendChild(checklistDiv);
        d.appendChild(date);


        form.appendChild(d);
    });
    div.appendChild(form);


    container.appendChild(div);


}