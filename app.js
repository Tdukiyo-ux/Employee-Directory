const express = require('express');
const app = express();

// Placeholder employee data
const employees = [
  { id: 1, name: 'Alice Johnson', department: 'Engineering' },
  { id: 2, name: 'Bob Smith',     department: 'Marketing'   },
  { id: 3, name: 'Carol White',   department: 'HR'          },
  { id: 4, name: 'David Lee',     department: 'Finance'     },
];

// GET /
app.get('/', (req, res) => {
  res.send('Hello employees!');
});

// GET /employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// ⚠️  /random MUST come before /:id
app.get('/employees/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
});

// GET /employees/:id
app.get('/employees/:id', (req, res) => {
  const employee = employees.find(e => e.id === Number(req.params.id));

  if (!employee) {
    return res.status(404).send('Employee not found');
  }

  res.json(employee);
});

module.exports = app;