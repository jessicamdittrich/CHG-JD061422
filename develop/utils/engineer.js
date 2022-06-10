class Engineer {
    constructor(name, id, email, gitHub) {
        //need to pull name, id, email from employee file
        this.gitHub = gitHub;
    }

    // GET GUTHUB USERNAME FUNCTION -> TO BE GIVEN BY USER
    getGitHub() {
        return this.gitHub;
    }

    // GET ROLE FUNCTION -> IS ENGINEER
    getRole() {
        return "Engineer";
    }
}

// EXPORTING
module.exports = Engineer;