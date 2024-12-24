export function populateStorage(projectList) {
    localStorage.setItem("projectList", JSON.stringify(projectList));
    console.log(JSON.parse(localStorage["projectList"]));
}