-- READ All departments
`SELECT * FROM sqlemployees_db.department;`;

-- READ All roles
`SELECT * FROM sqlemployees_db.employee;`;

-- READ All employees
`SELECT * FROM sqlemployees_db.role;`;

-- ADD a department
`INSERT INTO sqlemployees_db.department (name)
VALUES ("${name}");`

-- ADD a role
`INSERT INTO sqlemployees_db.role (title, salary, department_id)
VALUES ("${title}", ${salary}, ${deptId});`

-- ADD an employee
`INSERT INTO sqlemployees_db.employee (first_name, last_name, role_id, manager_id)
VALUES ("${first_name}", "${last_name}", ${role_id}, ${manager_id});`

-- UPDATE an employee
`UPDATE sqlemployees_db.employee
SET role_id = ${role_id}
WHERE id = ${emp_id};`