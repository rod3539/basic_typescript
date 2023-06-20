function printName(person) {
    console.log(person.first);
}
printName({ first: 'Thomas', last: 'Jenkins' });
var coordinate = { x: 32, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 240;
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log(song);
}
var mySong = {
    title: 'Unchaned Melody',
    artist: 'Righteous Brothers',
    numStreams: 222020202,
    credits: {
        producer: 'asdf',
        writer: 'wwerwer'
    }
};
calculatePayout(mySong);
printSong(mySong);
