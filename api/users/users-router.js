const router = require("express").Router();
const { restricted } = require("../auth/auth-middleware.js");
const User = require("./users-model.js");

router.get("/", restricted, async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
