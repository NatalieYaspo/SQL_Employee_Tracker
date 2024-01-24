// Packages needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

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
  // console.log(`Connected to the sqlemployees_db database.`) //Works
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
  db.query('SELECT * FROM sqlemployees_db.department;', function (err, results) {
      console.table(results);
      init();
  })
};

function viewRoles() {
  db.query('SELECT * FROM sqlemployees_db.role;', function (err, results) {
    console.table(results);
    init();
})
};

function viewEmps() {
  db.query('SELECT * FROM sqlemployees_db.employee;', function (err, results) {
    console.table(results);
    init();
})
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
    
    .then((response) => {
      // Switch to check which selection was made
      // console.log(response['Action Selection'])
      switch(response['Action Selection']) {
        case 'VIEW all departments':
          // console.log("selected View All Depts"); //Works
          viewDepts();
          break;
        case 'VIEW all roles':
          viewRoles();
          break;
        case 'VIEW all Employees':
          viewEmps();
          break;
        case 'ADD a department':
          addDept();
          break;
        case 'ADD a role':
          addRole();
          break;
        case 'ADD an employee':
          addEmp();
          break;
        case 'UPDATE an employee role':
          updateEmp();
          break;
      }
    })
}

// Function call to initialize app
init();

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
