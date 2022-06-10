// PROVIDED PACKAGES
const inquirer = require('inquirer');
const fs = require('fs');
// need for jest

// ADDED FILES
const idkyet = require('./utils/employee');
const idkyet2 = require('./utils/manager');
const idkyet3 = require('./utils/engineer');
const idkyet4 = require('./utils/intern');
const generateSite = require('./utils/generateSite');

// QUESTIONS WITH INQUIRER PACKAGE
const addManager = [
    {
        type: 'input',
        message: 'Hello Manager, please give me your name:',
        name: 'manager_name',
    },
    {
        type: 'input',
        message: 'What is your id?:',
        name: 'manager_id',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'manager_email',
    },
    {
        type: 'input',
        message: 'What is your office number to reach you at?',
        name: 'manager_number',
    },
    {
        type: 'list',
        message: 'Would you like to add a team member?',
        name: 'team_member',
        choices: ['Engineer', 'Intern', 'No that is all'],
    }, 
];

const addEngineer = [
    {
        type: 'input',
        message: 'What is this engineers name?:',
        name: 'engineer_name',
    },
    {
        type: 'input',
        message: 'What is this engineers id?:',
        name: 'engineer_id',
    },
    {
        type: 'input',
        message: 'What is this engineers email?',
        name: 'engineer_email',
    },
    {
        type: 'input',
        message: 'What is this engineers GitHub username?',
        name: 'engineer_gitHub',
    },
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'team_member',
        choices: ['Engineer', 'Intern', 'No that is all'],
    }, 
];

const addIntern = [
    {
        type: 'input',
        message: 'What is this interns name?:',
        name: 'intern_name',
    },
    {
        type: 'input',
        message: 'What is this interns id?:',
        name: 'intern_id',
    },
    {
        type: 'input',
        message: 'What is this interns email?',
        name: 'intern_email',
    },
    {
        type: 'input',
        message: 'Where did this intern go to school?',
        name: 'intern_school',
    },
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'team_member',
        choices: ['Engineer', 'Intern', 'No that is all'],
    }, 
];

// TO CREATE HTML DOCUMENT
function writeToFile(data) {

    fs.writeFile('index.html', generateSite(data),
        (err) =>
            err ? console.log(err) : console.log('Success!')
    );
   
}

// FUNCTION TO INITIALIZE APPLICATION
function init() {
    inquirer.prompt(addManager)
        .then((data) => {
            if(data.team_member === 'No that is all'){
                writeToFile(data); 
            }
            else if (data.team_member === 'Engineer') {
                inquirer.prompt(addEngineer).then((res)=>{
                    writeToFile(data)
                });
            }  
            else if (data.team_member === 'Intern') {
                inquirer.prompt(addIntern).then((res)=>{
                    writeToFile(data)
                });
            }        
        });
}

// FUNCTION TO CALL INITIALIZATION
init();