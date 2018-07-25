// Code your solution in this file!
function distanceFromHqInBlocks (pickupLocation) {
  if (pickupLocation > 42) {
    return pickupLocation-3;
  }
  else 
    return 42 - pickupLocation;
}

function distanceFromHqInFeet (pickupLocation) {
  return 264 * distanceFromHqInBlocks(pickupLocation); 
}
function distanceTravelledInFeet (start, end) {
  if (start>end) {
    return (start-end) * 264;
  }
  else {
  return (end-start) * 264;
  }
}
function calculatesFarePrice (start,end) {
  distance = distanceTravelledInFeet(start,end);
  if (distance < 400) {
    return 0 ;
  }
  else if (distance >=400 && distance <2000) {
    return 0.02 * (distance - 400);
   }
   else if (distance >2000 && distance <2500) {
     return 25;
   }
   else if (distance >= 2500) {
     return 'cannot travel that far';
   }
}
    