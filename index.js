const express = require('express');
const app = express();
app.use(express.json());

//Routes
app.use('/', require('./routes/general'));

// 404 handler
app.use((req,res) => {
    res.status(404).json({
        error: 'Route Not Found',
        path: req.path
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})