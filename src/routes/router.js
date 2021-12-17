const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index')
})

// Principales
router.get('/Comandos', (req, res) => {
    res.render('comandos')
})

router.get('/Precios', (req, res) => {
    res.render('prices')
})

router.get('/About', (req, res) => {
    res.render('about')
})

router.get('/Help', (req, res) => {
    res.render('help')
})

// Secundarias
router.get('/Stats', (req, res) => {
    res.render('other/stats')
})

router.get('/Creditos', (req, res) => {
    res.render('other/credits')
})

// Comandos
router.get('/Comandos/Moderacion', (req, res) => {
    res.render('commands/mod')
})

router.get('/Comandos/Comunes', (req, res) => {
    res.render('commands/comun')
})

router.get('/Comandos/Welcomes', (req, res) => {
    res.render('commands/welcomes')
})

module.exports = router;