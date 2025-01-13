function oldBooks(input) {
    //TODO:
    //1.Get known arguments x
    //2. Create helper variables x
    //2.1. Index x
    //2.2. Books checked counter x
    //3. While loop
    // 3.1. Get current book x
    // 3.2. Handle faviorite book  x
    // 3.3. Update books checked counter x
    // 3.4. Update index x
    //4. print result

    let favoriteBook = input[0];

    let index = 1;
    let command = input[index]; // to update and check our massive if it should start loop

    let booksChecked = 0;

    while (command !== 'No More Books') {
        let bookTitle = command;

        if (bookTitle === favoriteBook) {
            console.log(`You checked ${booksChecked} books and found it.`)
        
            return;
        }
        booksChecked++;

        index++;
        command = input[index];
    }

    console.log("The book you search is not here!");
    console.log(`You checked ${booksChecked} books.`);

}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);
