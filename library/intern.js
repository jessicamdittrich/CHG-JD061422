const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    // GET SCHOOL FUNCTION -> TO BE GIVEN BY USER
    getSchool() {
        return this.school;
    }

    // GET ROLE FUNCTION -> IS INTERN
    getRole() {
        return "Intern";
    }
}

// EXPORTING
module.exports = Intern;