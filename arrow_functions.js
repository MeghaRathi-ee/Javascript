const courses=[
    {id:1, name:'a'},
    {id:2, name: 'b'}
];

const course = courses.find(element=>element.name==='a');
console.log(course);