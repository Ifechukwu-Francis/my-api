const express = require('express');
const app = express();
app.use(express.json());

//Routes
app.get('/', (req, res) => {
  res.send('My backend is working!');
});

app.get('/about', (req, res) => {
    res.json({
        name: 'Ifechukwu',
        role:'Backend Engineer in training',
        month: 1
    })
})

app.get('/skills', (req, res) => {
    res.json({
        skills: ['JavaScript','Node.js','Express.js']
    })
})

app.get('/status',(req,res) => {
    res.json({
        status:' Online'
    })
})

app.use((req,res) => {
    res.status(404).json({
        error: 'Route Not Found',
        path: req.path
    })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})