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
    // res.render('comingSoon')
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

router.get('/Comandos/Logs', (req, res) => {
    res.render('commands/logs')
})

router.get('/Comandos/Musica', (req, res) => {
    // res.render('commands/music')
    res.render('comingSoon')
})

router.get('/Comandos/Economia', (req, res) => {
    res.render('commands/economy')
})

router.get('/Comandos/Rol', (req, res) => {
    res.render('commands/rol')
})

router.get('/Comandos/Nsfw', (req, res) => {
    res.render('commands/nsfw')
})

module.exports = router;