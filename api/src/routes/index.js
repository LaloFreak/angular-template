const router = require('express').Router();

router.post("/login", (req, res) => {
    res.status(200).json(`Success!`)
});

module.exports =  router