function sortNumbersV2 (n1,n2,n3) {

    [n1,n2,n3].sort().reverse().forEach(function(n) {
        console.log(n);
    })

}
sortNumbersV2(5,1,3);