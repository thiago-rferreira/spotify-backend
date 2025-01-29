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

    getSongById(id) {
        const song = this.songs.find(song => song.id == id);
        if (!song) throw new Error("Música não encontrada");
        return song;
    }

    updateSong(id, updatedData) {
        const song = this.getSongById(id);
        Object.assign(song, updatedData);
        return song;
    }

    deleteSong(id) {
        this.songs = this.songs.filter(song => song.id != id);
    }

    getTop10Songs() {
        console.log(this.songs);
        return this.songs.sort((a, b) => b.plays - a.plays).slice(0, 10);
    }
}

module.exports = SongList;
