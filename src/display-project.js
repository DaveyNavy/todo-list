import { clear } from "./utility";
import { format } from "date-fns";

export function displayProject(project) {
    clear();
    const container = document.querySelector(".content");

    const div = document.createElement("div");
    div.classList.add("project-item");

    const titleDiv = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = project.getName();

    titleDiv.appendChild(title);
    div.appendChild(titleDiv);

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

        const date = document.createElement("p");
        date.textContent = format(element.getDate(), "EEE, LLL d, y");
        date.classList.add("project-item-date");
        
        checklistDiv.appendChild(input);
        checklistDiv.appendChild(label);
        
        d.appendChild(checklistDiv);
        d.appendChild(date);


        form.appendChild(d);
    });
    div.appendChild(form);


    container.appendChild(div);


}