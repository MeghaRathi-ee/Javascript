let num=0;
function showNumbers(limit){
    while(num<=limit){
        if(num%2===0)
            console.log(num,"EVEN");
        else
            console.log(num,"ODD");
        num++;        
    }
}
showNumbers(10);
showNumbers(50);
