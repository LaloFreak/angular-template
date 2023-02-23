const router = require('express').Router();


router.post("/login", (req, res) => {
    console.log('entra ', req.body)
    res.status(200).send('Success!')

});

module.exports =  router