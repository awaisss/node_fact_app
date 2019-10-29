'use strict';

module.exports.factorial = async (event) => {
    const val = event.queryStringParameters && event.queryStringParameters.value ? event.queryStringParameters.value.trim() : null;

    if (!val || val.length < 1 || isNaN(val) || Number(val) < 0)
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Invalid data sent',
            }, null, 2),
        }

    const num = Number(val);
    const result = factorial(num);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Processed successfully.',
            data: { result: result }
        }, null, 2),
    };

};



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
