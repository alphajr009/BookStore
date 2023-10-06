const express = require("express");
const router = express.Router();
const Book = require("../models/book");



router.post("/addbook", async (req, res) => {

    const newbook = new Book({
        title: req.body.title,
        author: req.body.author,
        ISBN: req.body.ISBN,

    });

    try {
     await newbook.save();
     return res.send("Book Details Entered Successfully");

    } catch (error) {
        console.log("error in route");
        console.log(newbook);
        return res.status(400).json({ error });
    }
});

router.get("/getallbooks", async (req, res) => {

    try {
        const books = await Book.find({})
        res.send({ books });
    } catch (error) {
        return res.status(400).json({ error });
    }

});


router.patch('/deletebook', async (req, res) => {
    const { ISBN } = req.body;

    try {
        const book = await Book.findOneAndDelete({ ISBN });

        if (!book) return res.status(404).send('Book not found');
        res.send('Book deleted successfully');
    } catch (error) {
        console.log(error);
        res.status(400).send('Error deleting Book');
    }
});



module.exports = router;
