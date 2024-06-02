const removeFromArray = function(inputArray, numToRemove) {
    for (i = 1; i < arguments.length; i++)
    {
        //Get the index of the number
        indexOfNum = inputArray.indexOf(arguments[i]);
        //Only remove if the number is present
        if (indexOfNum != -1)
            inputArray.splice(indexOfNum, 1);
        //Make sure to remove every instance of the variable
        if (inputArray.indexOf(arguments[i]) != -1)
            removeFromArray(inputArray, arguments[i]);
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
