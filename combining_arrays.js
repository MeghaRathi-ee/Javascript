const first=[1,2,3];
const second=[4,5,6];

first.cocat(second);

const combined=first.cocat(second);
console.log(combined);

const slice=combined.slice(2,4);

console.log(combined);
console.log(slice);

const slice1=combined.slice(2);
console.log(combined);
console.log(slice1);

const first1=[{id:1}];
const second1=[4,5,6];

const combined1=first1.cocat(second1);
first1[0].id=10;
console.log(combined1); 