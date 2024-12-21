export class ProjectList {
    projectList;

    constructor() {
        this.projectList = new Array();
    }

    addProject(project) {
        this.projectList.push(project);
    }

    removeProject(project) {
        this.projectList = this.projectList.filter((item) => {
            item != project;
        })
    }

    getProjectList() {
        return this.projectList;
    }
}