let add=0, num=0;
console.log(sum(10));
function sum(limit){
    while(num<=limit){
        if(num%3===0 || num%5===0)
            add=add+num;
        num++;    
    }
    return add;
}

