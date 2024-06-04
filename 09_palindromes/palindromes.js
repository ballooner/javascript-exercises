const palindromes = function(string) {
    let newString = string.toLowerCase().match(/[\w]/g);
    
    return newString.join("") === newString.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
