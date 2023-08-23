const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    const val=req.body;
    const a=val.first;
    const b=val.second;
    res.json({ "result": a+b });
});


baseRouter.post('/subtract', (req, res) => {
    const val=req.body;
    const a=val.first;
    const b=val.second;
    res.json({ "result": a-b });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});