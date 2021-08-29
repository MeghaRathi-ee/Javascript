let numbers=[1,2,3,4];
numbers=[];
console.log(numbers);

let numbers1=[1,2,3,4];
let another=numbers1;

numbers=[];
console.log(another);
console.log(numbers1);

let numbers2=[1,2,3,4];
let another1=numbers2;
numbers2.length=0;
console.log(numbers2);
console.log(another1);

numbers3.splice(0,numbers2.length);
console.log(numbers2);
console.log(another1);

while(numbers.length>0)
    numbers.pop();

console.log(numbers);
console.log(another);    