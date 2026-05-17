const express = require('express');
const app = express();
app.use(express.json());

//Routes
app.use('/api/v1', require('./routes/general'));
app.use('/api/v1/books', require('./routes/books'));

// 404 handler
app.use((req,res) => {
    res.status(404).json({
        error: 'Route Not Found',
        path: req.path
    })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})