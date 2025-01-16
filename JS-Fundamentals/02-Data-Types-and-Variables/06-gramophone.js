function gramophone(band, album, song) {

    let duration = (album.length * band.length) * song.length / 2;

    let timesRotation = duration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(timesRotation)} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');