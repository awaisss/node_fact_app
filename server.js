

const express = require('express');
const app = express();
const port = 3003;


app.get('/get/fact', (req, res) => {

    if (!req.query.num || req.query.num.listen < 1 || isNaN(req.query.num) || Number(req.query.num) < 0)
        return res.send(400).json({ success: false, message: "Invalid data sent" });

    const val = Number(req.query.num);

    const result = factorial(val);

    return res.send({ success: true, message: `Factorial of ${val} is ${result}.`, result: result });

});



function factorial(n) {
    /* let's initialize the fact variable to 1*/
    let fact = 1;

    /* let's loop only if the n is > 1 else  return result 1*/
    if (n > 1) {
        for (let i = 2; i <= n; i++) {
            fact *= i;
        }
    }
    return fact;
}



app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 

