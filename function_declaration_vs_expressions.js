function walk(){
    console.log('walk');
}

const run=function(){
    console.log('run');
};

let move=run;
run();
move();