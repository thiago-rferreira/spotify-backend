const Song = require("../models/Song");
const SongList = require("../models/SongList");

const lista = new SongList(); // Certifique-se de que está criando uma instância


// Adiciona as músicas na lista
lista.addSong(new Song("Fix You", "Coldplay", "4:55", 100));
lista.addSong(new Song("Someone Like You", "Adele", "4:45", 200));

const router = {
  getAllSongs: (req, res) => {
    try {
      const songs = lista.getAllSongs();
      res.json(songs);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar músicas", error });
    }
  },

  getSongById: (req, res) => {
    try {
      const song = lista.getSongById(req.params.id);
      if (song) res.json(song);
      else res.status(404).json({ message: "Música não encontrada" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar a música", error });
    }
  },

  addSong: (req, res) => {
    try {
      const { title, singer, duration, plays } = req.body;
      if (!title || !singer || !duration || plays === undefined) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
      }
      const newSong = new Song(title, singer, duration, plays);
      lista.addSong(newSong);
      res.status(201).json(newSong);
    } catch (error) {
      res.status(500).json({ message: "Erro ao adicionar a música", error });
    }
  },

  updateSong: (req, res) => {
    try {
      const updatedSong = lista.updateSong(req.params.id, req.body);
      if (updatedSong) {
        res.json(updatedSong);
      } else {
        res.status(404).json({ message: "Música não encontrada" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar a música", error });
    }
  },

  deleteSong: (req, res) => {
    try {
      const success = lista.deleteSong(req.params.id);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Música não encontrada" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar a música", error });
    }
  },

  getTop10Songs: (req, res) => {
    try {
      const topSongs = lista.getTop10Songs();
      res.json(topSongs);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar as 10 melhores músicas", error });
    }
  }
};

module.exports = router;
