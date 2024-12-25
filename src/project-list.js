export class ProjectList {
    projectList;
    projectIndex;

    constructor() {
        this.projectList = new Array();
    }

    addProject(project) {
        this.projectList.push(project);
    }

    removeProject(project) {
        this.projectList.splice(this.projectList.findIndex(e => e.getIndex() == project.getIndex()), 1);
    }

    getProjectList() {
        return this.projectList;
    }

    findProject(projectName) {
        for (const p of this.projectList) {
            if (p.getName() == projectName) {
                return p;
            }
        }
        return null;
    }
}