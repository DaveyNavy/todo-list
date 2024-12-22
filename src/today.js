import plant from "./images/plant.png";
import { clear } from "./utility.js";

export function today(projectList) {
    clear(); 

    const container = document.querySelector(".content");

    const div = document.createElement("div");
    div.classList.add("today");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("today-title");

    const title = document.createElement("h1");
    title.textContent = "Today";

    titleDiv.appendChild(title);
    div.appendChild(titleDiv);


    let totalTodayTasks = 0;
    const form = document.createElement("form");
    form.classList.add("today-item-checklist");

    projectList.getProjectList().forEach(element => {
        const todayTasks = element.getTasksOnDate(new Date());

        todayTasks.forEach((e, index) => {
            const checklistDiv = document.createElement("div");
            checklistDiv.classList.add("checklist-item");
            checklistDiv.classList.add("today-checklist-item");



            const label = document.createElement("label");
            label.setAttribute("for", "item" + index);
            label.textContent = e.getTitle();

            const input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("name", "item" + index);

            const projectName = document.createElement("p");
            projectName.textContent = e.getProjectName();

            checklistDiv.appendChild(input);

            const d = document.createElement("div");

            d.appendChild(label);
            d.appendChild(projectName);

            checklistDiv.appendChild(d);
            form.appendChild(checklistDiv);

            totalTodayTasks++;
        })

    });
    div.appendChild(form);


    if (totalTodayTasks == 0) {
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image-div");

        const placeholder = document.createElement("img");
        placeholder.setAttribute("src", plant);
        placeholder.classList.add("placeholder");

        const text = document.createElement("h2");
        text.textContent = "No Tasks for Today!"

        imageDiv.append(placeholder);
        imageDiv.append(text);
        div.appendChild(imageDiv);
    }

    container.appendChild(div);
}