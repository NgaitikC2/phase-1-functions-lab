// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocks = Math.abs(destinationBlock - startBlock);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function calculatesFarePrice(start, dstination) {
    const feetPerBlock = 264;
    const totalFeet = Math.abs(dstination - start) * feetPerBlock
    if (totalFeet <= 400) 
        {return 0;}
    else if (totalFeet <= 2000) {
        const fare = (totalFeet - 400) * 0.02;
        return fare;}
    else if (totalFeet >= 2000 && totalFeet <2500) {
        return 25;}
    else if (totalFeet >= 2500) {
        return "cannot travel that far";}
    }

  const pickupLocation = 50;
  const startBlock = 34;
  const destinationBlock = 38;
  
  const start = 34;
  const dstination = 40;

  console.log("Distance from headquarters in blocks:", distanceFromHqInBlocks(pickupLocation));
  console.log("Distance from headquarters in feet:", distanceFromHqInFeet(pickupLocation));
  console.log("Distance travelled in feet:", distanceTravelledInFeet(startBlock, destinationBlock));
  console.log("Fare price:", calculatesFarePrice(start, dstination));
