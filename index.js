const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get('/sumOfThree', (req, res) => {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let num3 = req.query.num3;
    n1 = parseInt(num1);
    n2 = parseInt(num2);
    n3 = parseInt(num3);
    let sum = n1 + n2 + n3;

    res.send("The sum of the three numbers is: " + sum);
    }
);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);