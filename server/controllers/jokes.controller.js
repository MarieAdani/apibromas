const Joke = require("../models/jokes.model");

//CRUD C create, R read, U update, D delete

const getAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err) => console.log(err))
};

const newJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => res.json(newJoke))
        .catch((err) => console.log(err))
};

const getJokeById = (req, res) => {
    Joke.findOne({_id: req.params._id})
    .then((Joke) => res.json(Joke))
    .catch((err) => console.log(err))
};

const updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true, runValidators: true})
    .then((updateJoke) => res.json(updateJoke))
    .catch((err) => console.log(err))
};

const deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
    .then((result) => res.json(result))
    .catch((err) => console.log(err))
};


module.exports={
    getAllJokes, 
    newJoke,
    getJokeById,
    updateJoke,
    deleteJoke
}