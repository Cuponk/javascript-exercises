const reverseString = function(str) {
    let arr = str.split('');
    let res = [];
    for (let i = arr.length; i >= 0; i--) {
        res.push(arr[i]);
    }
    
    return res.join('');
}
// Do not edit below this line
module.exports = reverseString;
