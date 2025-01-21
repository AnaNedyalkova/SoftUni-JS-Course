function chessBoard(n) {

    console.log('<div class="chessboard">');

    let counter  = 0;

    for (let div = 0; div < n; div++) {
        console.log('  <div>');
        counter++;
        for (let span = 0; span < n; span++) {

            if (counter % 2  !== 0) {

                if (span % 2  !== 0) {
                    console.log('<span class="white"></span>')
                } else {
                    console.log('<span class="black"></span>')
                }
            } else {
                if (span % 2  !== 0) {
                    console.log('<span class="black"></span>')
                } else {
                    console.log('<span class="white"></span>')
                }
            }
        }
        console.log('  </div>');
    }
    console.log('</div>');
}
chessBoard(5);