function lastKNumbersSequance(n, k) {
    let arr = [1]; // always starts with 1

    for (let i = 1; i < n; i++) {
        let sum  = 0;
        let start = Math.max(0, i-k); 
        let end = arr.length;
        let cuttedEl = arr.slice(start,end);  // slice(-k) gives same result and clearer

        for (el of cuttedEl) {
            sum += el;
        }
        arr.push(sum);
    }
    return arr.join(" ")
}
console.log(lastKNumbersSequance(6, 3));