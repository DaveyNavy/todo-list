import CircleProgress from "js-circle-progress";

export function displayToDo(todo) {
    const container = document.querySelector(".content");

    const div = document.createElement("div");
    div.classList.add("todo-item");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("todo-item-title")

    const cp = new CircleProgress({
        max: 100,
        value: 0,
        textFormat: 'none',
    });

    const title = document.createElement("h1");
    title.textContent = todo.getTitle();
    title.classList.add("todo-item-title");
    
    titleDiv.appendChild(cp);
    titleDiv.appendChild(title);
    div.appendChild(titleDiv);

    const dueDate = document.createElement("h3");
    dueDate.textContent = todo.getDueDate();
    div.appendChild(dueDate);

    const description = document.createElement("p");
    description.textContent = todo.getDescription();
    div.appendChild(description);

    const tasks = document.createElement("h2");
    tasks.textContent = "Tasks";
    div.appendChild(tasks);

    const hr = document.createElement("hr")
    div.appendChild(hr);

    let totalChecked = 0;
    let total = 0;
    const form = document.createElement("form");
    todo.getChecklist().forEach((element, index) => {
        const checklistDiv = document.createElement("div");
        checklistDiv.classList.add("todo-item-checklist-item");

        const label = document.createElement("label");
        label.setAttribute("for", "item" + index);
        label.textContent = element;

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", "item" + index);
        input.addEventListener("change", function() {
            if (this.checked) {
                totalChecked++;
            } else {
                totalChecked--;
            }
            cp.value = totalChecked / total * 100;
        })
        total++;

        checklistDiv.appendChild(input);
        checklistDiv.appendChild(label);

        form.appendChild(checklistDiv);
    });
    form.classList.add("todo-item-checklist");
    div.appendChild(form);


    container.appendChild(div);
}