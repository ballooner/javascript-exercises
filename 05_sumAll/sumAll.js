const sumAll = function(firstInput, secondInput) {
    if (!((typeof firstInput == "number" && typeof secondInput == "number") && (firstInput > 0 && secondInput > 0)))
        return "ERROR";

    sum = 0;

    startNum = firstInput < secondInput ? firstInput : secondInput;
    endNum = firstInput > secondInput ? firstInput : secondInput;

    for (i = startNum; i <= endNum; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
