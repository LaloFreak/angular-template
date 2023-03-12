const router = require('express').Router();
const User = require('../models/User');

router.get('/', (req, res)=> {
    res.status(200).send('Ok Marito jiji')
})

router.post('/signup', async (req, res) => {
    console.log(req.body)
    try {
        const { username, password, email } = req.body;
        const user = new User({ username, password, email });
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al guardar el usuario' });
    }    
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        const hash = crypto.pbkdf2Sync(password, user.salt, 10000, 64, 'sha512').toString('base64');
        if (hash !== user.hash) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
});

module.exports =  router