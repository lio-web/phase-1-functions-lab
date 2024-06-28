function distanceFromHqInBlocks(someValue){
//returns the number of blocks given a value
if (someValue<42 ){
    return (42-someValue)
}else if (someValue>42){
    return(someValue-42)
}else if(someValue<42){
    return(42-someValue)
}
}
function distanceFromHqInFeet(someValue) {
   return distanceFromHqInBlocks(someValue)*264;
     // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
    if(distanceFromHqInBlocks(someValue<42)){
 return distanceFromHqInFeet(42-someValue)*264
  }else if (distanceFromHqInBlocks(someValue>42)){
     return distanceFromHqInFeet(someValue-42)*264
  }else if(distanceFromHqInBlocks(someValue<42)){
    return distanceFromHqInFeet(42-someValue)*264
  }
}
function distanceTravelledInFeet(a,b){
  if (b>a){
    return((b-a)*264);
  }
  else
    return((a-b)*264);
}
    function calculatesFarePrice(start,destination){
      let distance = distanceTravelledInFeet(start,destination);
      if (distance<= 400){
        return 0;
      }
      if (distance>=400 && distance<=2000){
        return (distance-400)* 0.02;
      }
      else if(distance>=2000&& distance<=2500){
        return 25;
      }
      else if (distance > 2500){
        return "cannot travel that far";
      }
    }

