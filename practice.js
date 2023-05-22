function checkStr (str){
    const otherStr = str.split('').reverse().join('');
    return str === otherStr;
}
console.log(checkStr("hih"))