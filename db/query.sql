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

-- Testing multi-joins from Jared Elliott -- NOT ACTULLY USED
`SELECT e.id, e.first_name AS 'First Name', e.last_name AS 'Last Name', r.title AS 'Title', d.name AS 'Department', r.salary AS 'Salary'
FROM employee as e 
INNER JOIN role as r ON r.id = e.id INNER JOIN department as d ON d.id = r.department_id;`

`SELECT e.id AS 'Emp. ID', e.first_name AS 'First Name', e.last_name AS 'Last Name', r.title AS 'Title', d.name AS 'Department', r.salary AS 'Salary', m.first_name AS 'Manager Name'
FROM employee as e 
INNER JOIN role as r ON r.id = e.id INNER JOIN department as d ON d.id = r.department_id INNER JOIN employee as m ON e.manager_id = m.id`

`SELECT e.id AS 'Emp. ID', e.first_name AS 'First Name', e.last_name AS 'Last Name', r.title AS 'Title', d.name AS 'Department', r.salary AS 'Salary', GROUP_CONCAT(m.first_name, ' ', m.last_name) AS 'Manager Name' 
FROM employee as e 
INNER JOIN role as r ON r.id = e.id INNER JOIN department as d ON d.id = r.department_id INNER JOIN employee as m ON e.manager_id = m.id GROUP BY e.id`