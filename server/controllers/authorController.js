const Author = require("../models/Author");

exports.crearAuthor = async (req, res) => {
    try {
        let author;

        // Creating the author
        author = new Author(req.body);

        await author.save();
        res.send(author);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.obtainAuthors = async (_req, res) => {

    try {
        const authors = await Book.find();
        res.json(authors)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }

}

exports.actualizarAuthor = async (req, res) => {

    try {
        const { firstName, lastName } = req.body;
        let author = await Author.findById(req.params.id);

        if(!author) {
            res.status(404).json({ msg: `The author doesn't exist` })
        }

        author.name = firstName;
        author.name = lastName;

        author = await Author.findOneAndUpdate({ _id: req.params.id },author, { new: true} )
        res.json(author);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.obtainAuthor = async (req, res) => {

    try {
        let author = await Author.findById(req.params.id);

        if(!author) {
            res.status(404).json({ msg: `The author doesn't exist` })
        }

        res.json(author);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}