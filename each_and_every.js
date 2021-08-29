const numbers=[1,2,3];
const allPositive=numbers.every(function (value){
    return value>=0;
});

console.log(allPositive);

const numbers1=[-1,2,3];
const allPositive1=numbers1.every(function (value){
    return value>=0;
});
console.log(allPositive1);

const numbers2=[1,-1,2,3];
const atLeastOnePositive2=numbers2.some(function(value){
    return value>=0;
});

console.log(atLeastOnePositive2);