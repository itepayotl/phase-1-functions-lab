function distanceFromHqInBlocks(someValue) {
    let block = 42
    return Math.abs(someValue - block)
}
function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    return distanceFromHqInBlocks(someValue) * 264
}
function distanceTravelledInFeet( start, distination) { 
    return Math.abs(start - distination)  * 264
}
function calculatesFarePrice(start, distination){
    let feet = distanceTravelledInFeet(start, distination)
    if (feet <= 400){
    return 0;
    } else if (feet >=400 && feet <=2000){
    return Math.abs(feet-400) * 0.02;
    } else if (feet >= 2000 && feet <= 2500) {
        return 25;
    }
    else if (feet > 2500) {
    return 'cannot travel that far'
    }
}