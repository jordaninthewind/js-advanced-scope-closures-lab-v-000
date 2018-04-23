
function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {

  	let start = parseInt(startBlock);
  	let end = parseInt(endBlock);
  	let distance = Math.abs(start - end);
  	let difference = blockRange - distance;

    if(difference > 0) {
    	return `within range by ${distance}`
    } else {
	   return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(checkPrice) {
	return function(percentage) {
		return checkPrice * percentage;
	}
}