import express from 'express';
const app = express();
const PORT = 8000;

app.get('/user',(req,res) => {
    res.send('Hello from home page')
});

app.listen(PORT,() => {
    console.log('Server started at http://localhost:8000');
})
