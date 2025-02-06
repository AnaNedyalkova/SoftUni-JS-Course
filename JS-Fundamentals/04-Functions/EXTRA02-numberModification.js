function modificateNumber(number) {
    
    function append9(n) {
       num = num + n;
       return num;
    }
    
    let num = number.toString();
    let sum = 0;
    
    
    while (sum / num.length <= 5) {
        
        for (let i = 0; i < num.length; i++) {
            let n = Number(num[i]);
            sum += n;
        }
        
        if (sum / num.length <= 5) {
            append9(9);
            sum = 0;
        }
    }
    
    console.log(num);
}

modificateNumber(101);