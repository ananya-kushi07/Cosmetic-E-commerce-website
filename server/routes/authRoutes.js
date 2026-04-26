const router = require("express").Router();

const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {

    try {

        const hashedPassword = await bcrypt.hash(
            req.body.password,
            10
        );

        const user = await User.create({

            name: req.body.name,

            email: req.body.email,

            password: hashedPassword,

            role: req.body.role

        });

        res.json(user);

    } catch (error) {

        res.status(500).json(error);

    }

});

router.post("/login", async (req, res) => {

    try {

        const user = await User.findOne({
            email: req.body.email
        });

        if (!user) {
            return res.json("User Not Found");
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword) {
            return res.json("Invalid Password");
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET
        );

        res.json({
            token,
            user
        });

    } catch (error) {

        res.status(500).json(error);

    }

});

module.exports = router;