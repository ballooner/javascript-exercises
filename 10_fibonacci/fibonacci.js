const fibonacci = function(num) {
    fibonacciArray = [0, 1, 1];

    for (i = 2; i < num; i++)
        {
            prevNum = fibonacciArray.at(i - 1);
            currNum = fibonacciArray.at(i);

            fibonacciArray.push(prevNum += currNum);
        }

    return num >= 0 ? fibonacciArray.at(num) : "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
