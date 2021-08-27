function checkSpeed(speed){
    const speedLimit=70;
    const kmPerPoint=5;
    if(speed<speedLimit+kmPerPoint){
        console.log('ok');
        return;
    }
    const points=Math.floor((speed-speedLimit)/kmPerPoint);
    if(points>=12)
        console.log('License suspended');
    else
        console.log('Points',points);     
}

checkSpeed(60);
checkSpeed(70);
checkSpeed(73);
checkSpeed(75);
checkSpeed(90);
checkSpeed(180);
