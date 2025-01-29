class SongList {
    constructor() {
        this.songs = [];
    }

    addSong(song) {
        this.songs.push(song);
    }

    getSongCount() {
        return this.songs.length;
    }

    getAllSongs() {
        return this.songs;
    }
}

module.exports = SongList;