function distanceFromHqInBlocks( distance){
    const headquarterslocation=42
    
    return Math.abs(headquarterslocation-distance);
    
}
function distanceFromHqInFeet( distance){
    const headquarterslocation=42;

    const feetperblock=264;

    const distanceinblocks=Math.abs(distance-headquarterslocation);

    const distanceinfeet=distanceinblocks*feetperblock;
    
    return distanceinfeet;

    
}

function distanceTravelledInFeet(start, end){

    const feetperblock=264;

    const distanceinblocks=Math.abs(end-start);

    const distanceinfeet=distanceinblocks*feetperblock;
    
    return distanceinfeet;

    
}


function calculatesFarePrice(start, destination){
    const feetperblock=264;

    const distanceinblocks=Math.abs(destination-start);

    const distanceInFeet=distanceinblocks*feetperblock;

     
    let price = 0;

  if (distanceInFeet <= 400) {
    price= 0; 
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    price = (distanceInFeet - 400) *2/100; 
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    price = 25; 
  } else {
    price = 'cannot travel that far';
  }

  return price;
}


    
