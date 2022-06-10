class Intern {
    constructor(name, id, email, school) {
        // i need to pull name, id, email from employee file
        this.school = school;
    }

    // GET SCHOOL FUNCTION -> TO BE GIVEN BY USER
    getSchool() {
        return this.officeNumber;
    }

    // GET ROLE FUNCTION -> IS INTERN
    getRole() {
        return "Intern";
    }
}

// EXPORTING
module.exports = Intern;