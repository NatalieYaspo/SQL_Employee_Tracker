// Packages needed for this application
// const express = require('express'); //Don't need
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware ??Dont need???
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // Add MySQL password here
    password: 'root',
    database: 'sqlemployees_db'
  },
  console.log(`Connected to the sqlemployees_db database.`)
);

//Main app question
const toDoQuest = [
    {
        type: 'list',
            message: 'What would you like to do?',
            choices: ['VIEW all departments', 'VIEW all roles', 'VIEW all Employees', 
            'ADD a department', 'ADD a role', 'ADD an employee', 
            'UPDATE an employee role'],
            name: 'Action Selection',
    }
];

//Functions for each Menu Options
function viewDepts() {
  app.get(
    db.query('SELECT * FROM sqlemployees_db.department;', function (err, results) {
      console.table(results);
  })
  );
};

function viewRoles() {

};

function viewEmps() {

};

function addDept() {

};

function addRole() {

};

function addEmp() {

};

function updateEmp() {

};




// Function to initialize app
function init() {
    inquirer.prompt(toDoQuest)
    
    // if (response = 'VIEW all departments' || 'VIEW all roles' || 'VIEW all Employees')

    .then(
      // Switch to check which selection was made
     
    )

}

// Function call to initialize app
init();


// app.listen(PORT); //, () => //don't need
//   console.log(`App listening at http://localhost:${PORT}`)

//Constructor to add a role
class addNewRole {
    constructor() {
      this.title = '';
      this.salary = '';
      this.department_id = '';
    }
    run() {
      return inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Title for New Role',
        },
        {
          type: 'input',
          name: 'salary',
          message: 'What is the Salary for the New Role?',
        },
        {
          type: 'input',
          name: 'department_id',
          message: 'Which department does this role belong to?',
        },
      ])
    //   .then(({ text, priority, confirmAddTask }) => { //need to adjust all of this.
    //     this.tasks.push({ text, priority });
    //     if (confirmAddTask) {
    //       return this.addTask();
    //     }
    //   });
  }
}
