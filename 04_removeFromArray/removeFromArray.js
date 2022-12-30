const removeFromArray = function(...args) {
    arr = args[0];
    newArr = [];
    arr.forEach(i => {
        if (!args.includes(i)) {
            newArr.push(i);
        }
    });
    return newArr;
}
// Do not edit below this line
module.exports = removeFromArray;
