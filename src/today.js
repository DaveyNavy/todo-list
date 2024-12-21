import plant from "./images/plant.png";

export function today(projectList) {
    const container = document.querySelector(".content");

    const div = document.createElement("div");
    div.classList.add("today");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("today-title");

    const title = document.createElement("h1");
    title.textContent = "Today";

    titleDiv.appendChild(title);
    div.appendChild(titleDiv);


    if (projectList.getProjectList().length == 0) {
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