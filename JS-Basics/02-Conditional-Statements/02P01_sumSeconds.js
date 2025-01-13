function sumSeconds (time1, time2, time3){
    let totalTimeSeconds = time1 + time2 + time3;
    let minutes = Math.floor(totalTimeSeconds / 60); 
    let seconds = totalTimeSeconds % 60;


    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(35, 45, 44);
sumSeconds(2, 7, 34);
sumSeconds(50, 50, 49);
sumSeconds(14, 12, 10);
