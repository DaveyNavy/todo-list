export class ProjectList {
    projectList;

    constructor() {
        this.projectList = new Array();
    }

    addProject(project) {
        this.projectList.push(project);
    }

    removeProject(project) {
        this.projectList = this.projectList.filter((item) => item.getName() != project.getName());
    }

    getProjectList() {
        return this.projectList;
    }

    findProject(projectName) {
        for (const p of this.projectList) {
            console.log(p);
            if (p.getName() == projectName) {
                return p;
            }
        }
        return null;
    }
}