const sumAll = function(num1, num2) {
    let sum = 0;
    let max = 0;
    let min = 0;
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (num1 < num2) {
        max = num2;
        min = num1;
    }
    else {
        max = num1;
        min = num2;
    }
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
