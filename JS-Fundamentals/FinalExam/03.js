// structure 
// {
//     username: { likes: 4, comments: 50 },
//   }

function solve03(arr) {

    let command = arr.shift();
    let followersStats = {};

    while (command !== 'Log out') {
        let tokens = command.split(': ');
        let action = tokens.shift();
        let username = tokens.shift();

        if (action == 'New follower') {

            if (!(username in followersStats)) {
                followersStats[username] = { likes: 0, comments: 0 };
            }

        } else if (action == 'Like') {
            let count = Number(tokens[0]);

            if (!(username in followersStats)) {
                followersStats[username] = { likes: count, comments: 0 };
            } else {
                followersStats[username].likes += count;
            }

        } else if (action == 'Comment') {

            if (!(username in followersStats)) {
                followersStats[username] = { likes: 0, comments: 1 };
            } else {
                followersStats[username].comments += 1;
            }

        } else if (action == 'Blocked') {

            if (!(username in followersStats)) {
                console.log(`${username} doesn't exist.`);

            } else {
                delete followersStats[username];
            }
        }
        command = arr.shift();
    }

    let entries = Object.entries(followersStats);
    console.log(`${entries.length} followers`);

    for (let [username, stats] of entries) {
        console.log(`${username}: ${stats.likes + stats.comments}`);
    }

}
solve03(["Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"]);