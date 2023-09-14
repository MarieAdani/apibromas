
const mongoose = require("mongoose");

mongoose    
    .connect("mongodb://127.0.0.1/chistes", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(
        () => console.log("Se establecio la coneccion con la base de datos")
    )
    .catch(
        (err) => console.log("algo salio mal, revisa el error", err)
    )

