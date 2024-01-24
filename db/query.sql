-- READ All departments
app.get('/api/departments', (req, res) => {
  const sql = `SELECT * FROM sqlemployees_db.department;`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

-- READ All roles

-- READ All employees

-- ADD a department

-- ADD a role

-- ADD an employee

-- UPDATE an employee