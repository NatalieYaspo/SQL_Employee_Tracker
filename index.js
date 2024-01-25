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

//Questions to add a new Department
const newDeptQuests = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the new department?',
  }
];

//Questions to add a new Department
const newRoleQuests = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the new role?',
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is the annual salary for the new role?',
  },
  {
    type: 'input',
    name: 'department_id',
    message: 'Which department does this role belong to (enter department id number)?',
  }
];

//Questions to add a new Employee
const newEmpQuests = [
  {
    type: 'input',
    name: 'first_name',
    message: `What is the new employee's first name?`,
  },
  {
    type: 'input',
    name: 'last_name',
    message: `What is the new employee's last name?`,
  },
  {
    type: 'input',
    name: 'role_id',
    message: 'Which role will this employee have (enter role id number)?',
  },
  {
    type: 'input',
    name: 'manager_id',
    message: 'Which manager will this employee report to (enter manager id number)?',
  }
];

//Questions to update an Employee's role
const updateEmpQuests = [
  {
    type: 'input',
    name: 'emp_id',
    message: `What is the employee's ID who's role you with to update?`,
  },
  {
    type: 'input',
    name: 'role_id',
    message: `Which role ID number would you like to update this to?`,
  },
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
  inquirer.prompt(newDeptQuests)

  .then((response) => {
    // console.log(response.name); //Gives correct input
    let newDept = response.name;
    // console.log(newDept);//Gives correct input
    db.query(`INSERT INTO sqlemployees_db.department (name)
    VALUES ("${newDept}");`, function (err, results) {
      viewDepts();
      init();
    })
  })
};

function addRole() {
  inquirer.prompt(newRoleQuests)

  .then((response) => {
    // console.log(response.title); //Gives correct input
    let title = response.title;
    let salary = response.salary;
    let deptId = response.department_id;
    db.query(`INSERT INTO sqlemployees_db.role (title, salary, department_id)
    VALUES ("${title}", ${salary}, ${deptId});`, function (err, results) {
      viewRoles();
      init();
    })
  })
};

function addEmp() {
  inquirer.prompt(newEmpQuests)

  .then((response) => {
    let first_name = response.first_name;
    let last_name = response.last_name;
    let role_id = response.role_id;
    let manager_id = response.manager_id;
    db.query(`INSERT INTO sqlemployees_db.employee (first_name, last_name, role_id, manager_id)
    VALUES ("${first_name}", "${last_name}", ${role_id}, ${manager_id});`, function (err, results) {
      viewEmps();
      init();
    })
  })
};

function updateEmp() {
  inquirer.prompt(updateEmpQuests)

  .then((response) => {
    let role_id = response.role_id;
    let emp_id = response.emp_id;
    db.query(`UPDATE sqlemployees_db.employee
    SET role_id = ${role_id}
    WHERE id = ${emp_id};`, function (err, results) {
      viewEmps();
      init();
    })
  })
};

// Function to initialize app
function init() {
    inquirer.prompt(toDoQuest)
    
    .then((response) => {
      // Switch to check which selection was made
      // console.log(response['Action Selection']) //Finding what I need to view for the switch
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
          // inquirer.prompt(newDeptQuests)
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
