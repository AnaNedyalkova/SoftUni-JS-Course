function songs(data) {
    class Song {
        constructor(name, time, typeList) {
            this.name = name;
            this.time = time;
            this.type = typeList;
        }
    }
    // Create a new array, where you will store songs
    let playList = [];
    let countSongs = Number(data.shift());
    let songType = data.pop();


    //Iterate over the songs:
    for(let i =0; i < countSongs; i++){
        let [type, name, time] = data[i].split('_');
        
        let mySong = new Song(name, time, type);

        playList.push(mySong);
    } 

    if (songType === 'all') {
        playList.forEach(song => console.log(song.name))
    } else {
        let filteredSongs = playList.filter(song => song.type === songType)
        filteredSongs.forEach(song => console.log(song.name))
    }

}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])