const courses=[
    {id:1, name:'a'},
    {id:2, name: 'b'}
];

console.log(courses.includes({id:1,name:'a'}));
console.log(courses.find(function(element){
    return element.name==='a';
}));

console.log(courses.find(function(element){
    return element.name==='xyz';
}));

console.log(courses.findIndex(function(element){
    return element.name==='a';
}));

console.log(courses.findIndex(function(element){
    return element.name==='xyz';
}));