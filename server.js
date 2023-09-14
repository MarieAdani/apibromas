const express = require("express");
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const JokeRoutes = require("./server/routes/jokes.routes");
JokeRoutes(app);

app.listen(8000, () => console.log("Express esta corriendo en el puerto 8000"));

