const express = require("express");
const cors = require("cors");
const songRoutes = require("./src/routes/songRoutes");

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use("/api", songRoutes);

//servidor ligado
app.get("/", (req, res) => {
  res.send("Servidor rodando");
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
