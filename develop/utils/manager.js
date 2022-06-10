class Manager {
    constructor(name, id, email, officeNumber) {
        // i need to pull name, id, email from employee file
        this.officeNumber = officeNumber;
    }

    // GET OFFICE NUMBER FUNCTION -> TO BE GIVEN BY USER
    getOfficeNumber() {
        return this.officeNumber;
    }

    // GET ROLE FUNCTION -> IS MANAGER
    getRole() {
        return "Manager";
    }
}

// EXPORTING
module.exports = Manager;