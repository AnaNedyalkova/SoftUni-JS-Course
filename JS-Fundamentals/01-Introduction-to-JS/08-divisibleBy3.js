function divisibleBy3 () {
    for(i =1; i <= 100; i++) {
        if(i % 3 === 0) {
            console.log(i);
        } else {
            continue;
        }
    }
}
divisibleBy4(3);