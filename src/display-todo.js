export function displayToDo(todo) {
    const container = document.querySelector(".content");

    const div = document.createElement("div");
    div.classList.add("todo-item");

    const title = document.createElement("h1");
    title.textContent = todo.getTitle();
    title.classList.add("todo-item-title");
    div.appendChild(title);

    const dueDate = document.createElement("h3");
    dueDate.textContent = todo.getDueDate();
    div.appendChild(dueDate);

    const description = document.createElement("p");
    description.textContent = todo.getDescription();
    div.appendChild(description);

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

        checklistDiv.appendChild(input);
        checklistDiv.appendChild(label);

        form.appendChild(checklistDiv);
    });
    form.classList.add("todo-item-checklist");
    div.appendChild(form);


    container.appendChild(div);
}