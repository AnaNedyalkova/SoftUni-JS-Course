function passwordsGenerator(n, l) {
    let first = true;
    let buffer = '';

    for (let s1 = 1; s1 <= n; s1++) {
        for (let s2 = 1; s1 <= n; s2++) {
            for (let s3 = 0; s3 < l; s3++) {  
                for (let s4 = 0; s4 < l; s4++) {
                    for (let s5 = 1; s5 <= n; s5++) {

                        if (s5 > s1 && s5 > s2) {

                            let char1 = String.fromCharCode(97 + s3);
                            let char2 = String.fromCharCode(97 + s4);

                            buffer  += `${s1}${s2}${char1}${char2}${s5} `;
                            if (!first) {
                                console.log(buffer);
                            first = false;
                        }
                    }
                    
                }
            }
        }
    }
}
}
passwordsGenerator(2,4);