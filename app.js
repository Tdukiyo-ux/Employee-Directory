import express from 'express';
import employees from '#db/employees';

const app = express();

// GET /
app.get('/', (req, res) => {
  res.send('Hello employees!');
});

// GET /employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// ⚠️ /random BEFORE /:id
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

export default app;