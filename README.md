# SQL_Employee_Tracker


## Description

This is a command line application to manage a company's employee database.

The user is prompted with questions that will allow them to vie, add, or update employees, departments or roles in the company's database.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

The user should clone this Repo locally.
Then the user should open their terminal and run:
- npm install
- install the schema.sql followed by seeds.sql into MySQL Workbench
- node index.js

## Usage

Once the user starts the app, they will be presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

When the user chooses to view all departments, they are presented with a formatted table showing department names and department ids.

When the user chooses to view all roles, they are presented with the job title, role id, the department that role belongs to, and the salary for that role.

When the user chooses to view all employees, they presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.

When the user chooses to add a department, they are prompted to enter the name of the department and that department is added to the database.

When the user chooses to add a role, they are prompted to enter the name, salary, and department for the role and that role is added to the database.

When the user chooses to add an employee, they are prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.

When the user chooses to update an employee role, they are prompted to select an employee to update and their new role and this information is updated in the database.

Video Tutorial: https://drive.google.com/file/d/1p-_LZHj2TpTs3dbHLnUVCxYZrHwDaAPk/view

## Credits

Developer: Natalie Yaspo

Collaborators:
- Le, Roger via Zoom on 24 Jan, 2024
- Peters, Sasha via Zoom on 24 Jan, 2024
- Elliott, Jaren via Zoom on 24 Jan, 2024

## License

MIT