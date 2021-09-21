const Book = require("../models/Book");

exports.crearBook = async (req, res) => {

    try {
        let book;

        // Creating the book
        book = new Book(req.body);

        await book.save();
        res.send(book);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.obtainBooks = async (_req, res) => {

    try {
        const books = await Book.find();
        res.json(books)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }

}

exports.actualizarBook = async (req, res) => {

    try {
        const { name, isbn, author } = req.body;
        let book = await Book.findById(req.params.id);

        if(!book) {
            res.status(404).json({ msg: `The book doesn't exist` })
        }

        book.name = name;
        book.isbn = isbn;
        book.author = author;

        book = await Book.findOneAndUpdate({ _id: req.params.id },book, { new: true} )
        res.json(book);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}


exports.obtainBook = async (req, res) => {

    try {
        let book = await Book.findById(req.params.id);

        if(!book) {
            res.status(404).json({ msg: `The book doesn't exist` })
        }
       
        res.json(book);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.deleteBook = async (req, res) => {

    try {
        let book = await Book.findById(req.params.id);

        if(!book) {
            res.status(404).json({ msg: `The book doesn't exist` })
        }
       
        await Book.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Book deleted succesfully' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}