const express = require("express");
const router = express.Router();
const songController = require("../controllers/songController");

router.get("/songs", songController.getAllSongs);
router.get("/songs/:id", songController.getSongById);
router.post("/songs", songController.addSong);
router.put("/songs/:id", songController.updateSong);
router.delete("/songs/:id", songController.deleteSong);
router.get("/songs/top10", songController.getTop10Songs);


module.exports = router;
