function pipesInPool(V,P1,P2,H) {
    let pipeOneWater = P1 * H;
    let pipeTwoWoter = P2 * H;
    let totalWater = pipeOneWater + pipeTwoWoter;
    let diff = Math.abs(totalWater - V);
    let percentFullPool = totalWater / V*100;
    let percentPipeOne = pipeOneWater / totalWater*100;
    let percentPipeTwo = pipeTwoWoter / totalWater*100;

    if (totalWater <= V) {

        console.log(`The pool is ${percentFullPool.toFixed(2)}% full. Pipe 1: ${percentPipeOne.toFixed(2)}%. Pipe 2: ${percentPipeTwo.toFixed(2)}%.`);
    } else {

        console.log(`For ${H.toFixed(2)} hours the pool overflows with ${diff.toFixed(2)} liters.`);

    }
}

pipesInPool(1000,100,120,3);
pipesInPool(100,100,100,2.5);