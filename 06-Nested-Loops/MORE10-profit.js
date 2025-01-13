function profit(oneLevCoins, twoLevCoins, fiveLevBanknots, sum) {

    for (let i = 0; i <= oneLevCoins; i++) {

        let oneLevSum = i * 1;

        for (let j = 0; j <= twoLevCoins; j++) {

            let twoLevSum = j * 2;

            for (let k = 0; k <= fiveLevBanknots; k++) {

                let fiveLevSum = k * 5;

                if (oneLevSum + twoLevSum + fiveLevSum === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`)
                }
            }
        }
    }
}


profit(5, 3, 1, 7);
//profit(3, 2, 3, 10);