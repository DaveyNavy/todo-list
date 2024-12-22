import { Project } from "./project";
import { ToDoItem } from "./todo-item";
import { clear } from "./utility";

export function projects(projectList) {
    clear();
    const container = document.querySelector(".content");

    const div = document.createElement("div");
    div.classList.add("projects-div")
    console.log(projectList.getProjectList());
    projectList.getProjectList().forEach(element => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h1");
        title.textContent = element.getName();
        card.appendChild(title);

        const form = document.createElement("form");
        element.getTaskNames().forEach((task, index) => {
            const checklistDiv = document.createElement("div");
            checklistDiv.classList.add("checklist-item");
    
            const label = document.createElement("label");
            label.setAttribute("for", "item" + index);
            label.textContent = task;
    
            const input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("name", "item" + index);

            checklistDiv.appendChild(input);
            checklistDiv.appendChild(label);

            form.appendChild(checklistDiv);
        })
        card.appendChild(form);
        div.appendChild(card);
    })
    container.appendChild(div);

}