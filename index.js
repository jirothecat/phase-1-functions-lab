// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    const headquarters = 42;
    const distanceInBlocks = Math.abs(pickup - headquarters);
    return distanceInBlocks;
  }

  function distanceFromHqInFeet(pickup) {
    const blocks = distanceFromHqInBlocks(pickup);
    const feet = blocks * 264;
    return feet;
  }

  function distanceTravelledInFeet(starting, ending) {
    const blocks = Math.abs(starting - ending);
    const feet = blocks * 264
    return feet;
  }

  function calculatesFarePrice(starting, ending) {
    const distanceInFeet = distanceTravelledInFeet(starting, ending);
  
    if (distanceInFeet > 2500) {
      return 'cannot travel that far';
    } else if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const fare = (distanceInFeet - 400) * 0.02;
      return Number(fare.toFixed(2));
    } else {
      return 25;
    }
  }