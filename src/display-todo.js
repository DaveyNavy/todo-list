import CircleProgress from "js-circle-progress";
import flag from "./images/flag.png";
import trash from "./images/trash.svg";
import pencil from "./images/pencil.svg"
import { clear } from "./utility";
import { format } from "date-fns";
import { displayProject } from "./display-project";
import { populateStorage } from "./populate-storage";
import { updateToDo } from "./update-todo";

export function displayToDo(projectList, project, todo) {
    clear();
    const container = document.querySelector(".content");

    const div = document.createElement("div");
    div.classList.add("todo-item");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("todo-item-title");

    const cp = new CircleProgress({
        max: 100,
        value: 0,
        textFormat: 'none',
    });

    const title = document.createElement("h1");
    title.textContent = todo.getTitle();
    title.classList.add("todo-item-title");

    const trashIcon = document.createElement("img");
    trashIcon.setAttribute("src", trash);
    trashIcon.classList.add("icon");
    trashIcon.addEventListener("click", () => {
        project.removeTask(todo);
        displayProject(projectList, project);
        populateStorage(projectList);
    })

    const pencilIcon = document.createElement("img");
    pencilIcon.setAttribute("src", pencil);
    pencilIcon.classList.add("icon");
    pencilIcon.addEventListener("click", () => {
        updateToDo(projectList, todo);
    })
    
    titleDiv.appendChild(cp);
    titleDiv.appendChild(title);
    titleDiv.appendChild(trashIcon);
    titleDiv.appendChild(pencilIcon);
    div.appendChild(titleDiv);

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date-div");

    const dueDate = document.createElement("h3");
    dueDate.textContent = todo.getDate() != 'Invalid Date'? format(todo.getDate(), "EEE, LLL d, y") : '';
    dateDiv.appendChild(dueDate);

    if (todo.getDate().getMonth() == new Date().getMonth() && (todo.getDate().getDate() == new Date().getDate())) {
        const flagIcon = document.createElement("img");
        flagIcon.setAttribute("src", flag);
        dateDiv.appendChild(flagIcon);
    }
    div.appendChild(dateDiv);

    const description = document.createElement("p");
    description.textContent = todo.getDescription();
    div.appendChild(description);

    const tasks = document.createElement("h2");
    tasks.textContent = "Tasks";

    let totalChecked = 0;
    let total = 0;
    const form = document.createElement("form");
    todo.getChecklist().forEach((element, index) => {
        const checklistDiv = document.createElement("div");
        checklistDiv.classList.add("checklist-item");

        const label = document.createElement("label");
        label.setAttribute("for", "item" + index);
        label.textContent = element.getDescription();

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", "item" + index);
        input.addEventListener("change", function() {
            if (this.checked) {
                totalChecked++;
                element.setCompleted(true);
            } else {
                totalChecked--;
                element.setCompleted(false);
            }
            cp.value = totalChecked / total * 100;
            populateStorage(projectList);
        })
        if (element.isCompleted()) { 
            input.setAttribute("checked", "checked");
            totalChecked++;
        }
        total++;

        checklistDiv.appendChild(input);
        checklistDiv.appendChild(label);

        form.appendChild(checklistDiv);
    });
    if (total > 0) cp.value = totalChecked / total * 100;

    if (total > 0) {
        div.appendChild(tasks);
    }
    form.classList.add("item-checklist");
    div.appendChild(form);


    container.appendChild(div);
}