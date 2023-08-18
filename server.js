const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    // console.log("yes API is working");
    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    const { first, second } = req.body; // Extract first and second from the request body

    // Check if both first and second are valid numbers
    if (typeof first !== 'number' || typeof second !== 'number') {
        return res.status(400).json({ error: 'Invalid input. Both numbers should be valid.' });
    }

    const sum = first + second; // Calculate the sum of first and second

    res.json({ result: sum }); // Send the sum as a JSON response
});

baseRouter.post('/subtract', (req, res) => {
    const { first, second } = req.body;

    if(typeof first!== 'number' || typeof second!== 'number'){
        return res.status(400).json({error: 'Invalid input. Both numbers need to be valid.'});
    }

    const diff = first - second;
    res.json({ result: diff });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
