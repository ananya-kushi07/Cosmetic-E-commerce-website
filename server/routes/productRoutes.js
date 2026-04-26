const router = require("express").Router();

const Product = require("../models/Product");

router.post("/", async (req, res) => {

    try {

        const product = await Product.create(req.body);

        res.json(product);

    } catch (error) {

        res.status(500).json(error);

    }

});

router.get("/", async (req, res) => {

    try {

        const products = await Product.find();

        res.json(products);

    } catch (error) {

        res.status(500).json(error);

    }

});

router.delete("/:id", async (req, res) => {

    try {

        await Product.findByIdAndDelete(req.params.id);

        res.json("Product Deleted");

    } catch (error) {

        res.status(500).json(error);

    }

});

module.exports = router;