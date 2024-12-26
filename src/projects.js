import { displayProject } from "./display-project";
import { Project } from "./project";
import { ToDoItem } from "./todo-item";
import { clear } from "./utility";
import { populateStorage } from "./populate-storage";

export function projects(projectList) {
    clear();
    const container = document.querySelector(".content");

    const div = document.createElement("div");
    div.classList.add("projects-div")

    projectList.getProjectList().forEach(element => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h1");
        title.textContent = element.getName();
        title.addEventListener("click", () => {
            displayProject(projectList, element)
        });
        card.appendChild(title);

        const form = document.createElement("form");
        form.classList.add("projects-form")
        element.getTasks().forEach((task, index) => {
            const checklistDiv = document.createElement("div");
            checklistDiv.classList.add("checklist-item");
    
            const label = document.createElement("label");
            label.setAttribute("for", "item" + index);
            label.textContent = task.getTitle();
    
            const input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("id", "item" + index);
            input.setAttribute("name", "item" + index);
            input.addEventListener("change", function() {
                if (this.checked) {
                    task.setCompleted(true);
                } else {
                    task.setCompleted(false);
                }
                populateStorage(projectList);
            })
            if (task.isCompleted()) input.setAttribute("checked", "checked");

            checklistDiv.appendChild(input);
            checklistDiv.appendChild(label);

            form.appendChild(checklistDiv);
        })
        card.appendChild(form);
        div.appendChild(card);
    })

    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("center");


    const newProject = document.createElement("h1");
    newProject.textContent = "+";
    card.appendChild(newProject);

    card.addEventListener("click", () => {
        const dialog = document.createElement("dialog");
        div.appendChild(dialog);

        const form = document.createElement("form");

        const nameDiv = document.createElement("div");

        const label = document.createElement("label");
        label.setAttribute("for", "name");
        label.textContent = "Project name: ";

        const input = document.createElement("input");
        input.setAttribute("id", "name");
        input.setAttribute("name", "name");

        nameDiv.appendChild(label);
        nameDiv.appendChild(input);
        nameDiv.classList.add("form-item");

        form.appendChild(nameDiv);

        const submit = document.createElement("button");
        submit.textContent = "Submit";
        form.appendChild(submit);

        dialog.appendChild(form);
        dialog.showModal();

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            dialog.close();
            let newProject = new Project(input.value);
            projectList.addProject(newProject);
            populateStorage(projectList);
            projects(projectList);
        })
    })
    div.appendChild(card);
    container.appendChild(div);

}