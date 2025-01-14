function sortNumbers (n1, n2, n3) {
    let first = 0;
    let second = 0;
    let third = 0;

    if (n1 > n2) {
        first = n1; 
        second = n2;
    } else {
        first = n2;
        second = n1;
    }

    if (n3 > first) {   //check if n3 is the biggest number
        third = second;
        second = first;
        first = n3;
    } else if (n3 < first && n3 > second) {  // check if n3 is in the middle
        third = second;
        second = n3;
    } else {    // n3 is the last number
        third = n3;
    }

    console.log(first);
    console.log(second);
    console.log(third);
}
sortNumbers(5,1,3);