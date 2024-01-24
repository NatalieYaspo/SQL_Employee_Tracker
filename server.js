// Packages needed for this application
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
// const api = require('./routes/index.js'); //not sure if I want to use this

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use('/api', api); //not sure if I want to use this

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
]


// Function to initialize app
function init() {
    inquirer.prompt(toDoQuest)
    
    .then((response) => {
        console.log(response)
    })

    .then(app.get('/api/departments', (req, res) => {
            const sql = `SELECT * FROM sqlemployees_db.department;`;
            
            db.query(sql, (err, rows) => {
              if (err) {
                res.status(500).json({ error: err.message });
                 return;
              }
              res.json(console.table(rows));
            });
          }));
}

// Function call to initialize app
init();


app.listen(PORT); //, () =>
//   console.log(`App listening at http://localhost:${PORT}`)
