export function populateStorage(projectList) {
    localStorage.setItem("projectList", JSON.stringify(projectList));
}