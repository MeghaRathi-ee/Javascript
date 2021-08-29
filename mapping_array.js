const numbers=[1,-1,2,3];
const filtered=numbers.filter(n>=n>=0);
const items=filtered.map(n=>'li'+n+'/li');
console.log(items);
const html =items.join();
console.log(html);

const numbers1=[1,-1,2,3];
const filtered1=numbers1.filter(n>=n>=0);
const items1=filtered1.map(n=>{
    const obj={value:n};
});

console.log(items1);
