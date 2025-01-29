const { v4: uuidv4 } = require("uuid");

class Song {
    constructor(title, singer, duration, plays = 0) {
        this.id = uuidv4();
        this.title = title;
        this.singer = singer;
        this.duration = duration;
        this.plays = plays;
    }

    play() {
        this.plays += 1;
    }
}

module.exports = Song;
