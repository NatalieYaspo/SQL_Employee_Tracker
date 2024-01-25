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
      'UPDATE an employee role', 'UPDATE an employee manager',
      'DELETE a department', 'DELETE a role', 'DELETE an employee',
      'VIEW employees by Title', 'VIEW total Salary by Department'],
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
    message: `What is the employee's ID who's role you wish to update?`,
  },
  {
    type: 'input',
    name: 'role_id',
    message: `Which role ID number would you like to update this to?`,
  },
];

//Questions to update an Employee's manager
const updateMgrQuests = [
  {
    type: 'input',
    name: 'emp_id',
    message: `What is the employee's ID who's manager you wish to update?`,
  },
  {
    type: 'input',
    name: 'manager_id',
    message: `Which manager ID number would you like to update this to?`,
  },
];

//Questions to Delete a Department
const deleteDeptQuests = [
  {
    type: 'input',
    name: 'dept_id',
    message: `What is the department's ID which you wish to delete?`,
  },
];

//Questions to Delete a Department
const deleteRoleQuests = [
  {
    type: 'input',
    name: 'role_id',
    message: `What is the role's ID which you wish to delete?`,
  },
];

//Questions to Delete an Employee
const deleteEmpQuests = [
  {
    type: 'input',
    name: 'emp_id',
    message: `What is the employee's ID whom you wish to delete?`,
  },
];

//Questions for Salary by Department
const deptSalaryQuests = [
  {
    type: 'input',
    name: 'dept_id',
    message: `What is the department's ID which you wish to see the total salary?`,
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

function updateMgr() {
  inquirer.prompt(updateMgrQuests)

    .then((response) => {
      let manager_id = response.manager_id;
      let emp_id = response.emp_id;
      db.query(`UPDATE sqlemployees_db.employee
    SET manager_id = ${manager_id}
    WHERE id = ${emp_id};`, function (err, results) {
        viewEmps();
        init();
      })
    })
};

function deleteDept() {
  inquirer.prompt(deleteDeptQuests)

    .then((response) => {
      let dept_id = response.dept_id;
      db.query(`DELETE FROM sqlemployees_db.department WHERE id = ${dept_id};`, function (err, results) {
        viewDepts();
        init();
      })
    })
};

function deleteRole() {
  inquirer.prompt(deleteRoleQuests)

    .then((response) => {
      let role_id = response.role_id;
      db.query(`DELETE FROM sqlemployees_db.role WHERE id = ${role_id};`, function (err, results) {
        viewDepts();
        init();
      })
    })
};

function deleteEmp() {
  inquirer.prompt(deleteEmpQuests)

    .then((response) => {
      let emp_id = response.emp_id;
      db.query(`DELETE FROM sqlemployees_db.employee WHERE id = ${emp_id};`, function (err, results) {
        viewEmps();
        init();
      })
    })
};

function viewEmpsTitles() {
  db.query(`SELECT employee.first_name, employee.last_name, role.title AS title
  FROM sqlemployees_db.employee
  JOIN sqlemployees_db.role ON employee.role_id = role.id`, function (err, results) {
    console.table(results);
    init();
  })
};

function deptSalary() {
  inquirer.prompt(deptSalaryQuests)

    .then((response) => {
      let dept_id = response.dept_id;
      db.query(`SELECT SUM(salary) AS totalDeptSalary
    FROM sqlemployees_db.role
    WHERE department_id = ${dept_id};`, function (err, results) {
        console.table(results);
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
      switch (response['Action Selection']) {
        case 'VIEW all departments':
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
        case 'UPDATE an employee manager':
          updateMgr();
          break;
        case 'DELETE a department':
          deleteDept();
          break;
        case 'DELETE a role':
          deleteRole();
          break;
        case 'DELETE an employee':
          deleteEmp();
          break;
        case 'VIEW employees by Title':
          viewEmpsTitles();
          break;
        case 'VIEW total Salary by Department':
          deptSalary();
          break;
      }
    })
}

// Function call to initialize app
init();