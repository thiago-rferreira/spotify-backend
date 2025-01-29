const Song = require("../models/Song");
const SongList = require("../models/SongList");

const lista = new SongList(); // Certifique-se de que está criando uma instância

// Adiciona as músicas na lista
lista.addSong(new Song("Fix You", "Coldplay", "4:55", 100));
lista.addSong(new Song("Someone Like You", "Adele", "4:45", 200));

const router = {
  getAllSongs: (req, res) => {
    try {
      res.json(lista.getAllSongs());
    } catch (error) {
      res.status(404).json({ message: "Erro ao buscar músicas", error });
    }
  },

  getSongById: (req, res) => {
    try {
      res.json(lista.getSongById(req.params.id));
    } catch (error) {
      res.status(404).json({ message: "Música não encontrada", error });
    }
  },

  addSong: (req, res) => {
    try {
      const { title, singer, duration, plays } = req.body;
      if (!title || !singer || !duration || plays === undefined) {
        throw new Error("Todos os campos são obrigatórios");
      }
      const newSong = new Song(title, singer, duration, plays);
      lista.addSong(newSong);
      res.status(201).json(newSong);
    } catch (error) {
      res.status(400).json({ message: error.message, error });
    }
  },

  updateSong: (req, res) => {
    try {
      res.json(lista.updateSong(req.params.id, req.body));
    } catch (error) {
      res.status(404).json({ message: "Erro ao atualizar a música", error });
    }
  },

  deleteSong: (req, res) => {
    try {
      lista.deleteSong(req.params.id);
      res.status(200).json({ message: "Música deletada com sucesso",
        IdDeletado: req.params.id
       });
    } catch (error) {
      res.status(404).json({ message: "Erro ao deletar a música", error });
    }
  },

  getTop10Songs: (req, res) => {
    try {
      res.json(lista.getTop10Songs());
    } catch (error) {
      res.status(404).json({ message: "Erro ao buscar as 10 melhores músicas", error });
    }
  }
};

module.exports = router;
