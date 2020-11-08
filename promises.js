function x() {
    return 3;
}

function y() {
    return 4;
}

async function sum(num1, num2) {
    const finalResult = num1 + num2;

    return finalResult;
}
//Promised based

function sumResult() {
    x().then( xResult => { y().then( yResult => { return xResult + yResult })});
}

//async await based
async function sumResult2() {
    const xResult = await x();
    const yResult = await y();

    return await sum(xResult, yResult);

}


const final = sumResult2();
console.log(final);
