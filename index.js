// PROVIDED PACKAGES
const inquirer = require('inquirer');
const fs = require('fs');

// ADDED FILES
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateSite = require('./utils/generateSite');

// GLOBAL ARRAY FOR TEAM MEMBERS
const team = [];

// QUESTIONS WITH INQUIRER PACKAGE - FOR MANAGER
const addManager = [
    {
        type: 'input',
        message: 'Hello Manager, please give me your name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your id?:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your office number to reach you at?',
        name: 'number',
    },
    {
        type: 'list',
        message: 'Would you like to add a team member?',
        name: 'team_member',
        choices: ['Engineer', 'Intern', 'No that is all'],
    }, 
];

// QUESTIONS WITH INQUIRER PACKAGE - FOR ENGINEER
const addEngineer = [
    {
        type: 'input',
        message: 'What is this engineers name?:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is this engineers id?:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is this engineers email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is this engineers GitHub username?',
        name: 'gitHub',
    },
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'team_member',
        choices: ['Engineer', 'Intern', 'No that is all'],
    }, 
];

// QUESTIONS WITH INQUIRER PACKAGE - FOR INTERN
const addIntern = [
    {
        type: 'input',
        message: 'What is this interns name?:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is this interns id?:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is this interns email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Where did this intern go to school?',
        name: 'school',
    },
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'team_member',
        choices: ['Engineer', 'Intern', 'No that is all'],
    }, 
];

// TO CREATE HTML DOCUMENT
function writeToFile() {

    fs.writeFile('./dist/index.html', generateSite(team),
        (err) =>
            err ? console.log(err) : console.log('Success!')
    );
   
}

// ENGINEER FUNCTION TO ASK QUESTIONS
function engineerQuestions() {
    inquirer.prompt(addEngineer)
        .then((data) => {
            const newMember = new Engineer(data.name, data.id, data.email, data.gitHub);
            team.push(newMember);
            teamLoop(data);
        });
}

// INTERN FUNCTION TO ASK QUESTIONS
function internQuestions() {
    inquirer.prompt(addIntern)
        .then((data) => {
            const newMember = new Intern(data.name, data.id, data.email, data.school);
            team.push(newMember);
            teamLoop(data);
        });
}

// FUNCTION WITH IF/ELSE STATEMENT TO LOOP THROUGH ENGINEER AND INTERN QUESTIONS
function teamLoop(data) {
    if(data.team_member === 'No that is all') {
        writeToFile();
    }
    else if (data.team_member === 'Engineer') {
        engineerQuestions();
    }  
    else if (data.team_member === 'Intern') {
        internQuestions();
    }
}

// FUNCTION TO INITIALIZE APPLICATION AND START WITH MANAGER QUESTIONS
function init() {
    inquirer.prompt(addManager)
        .then((data) => {
            const newMember = new Manager(data.name, data.id, data.email, data.number);
            team.push(newMember);
            teamLoop(data);       
        });
}

// FUNCTION TO CALL INITIALIZATION
init();