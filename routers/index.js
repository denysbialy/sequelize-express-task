const express = require('express');
const router = express.Router();
const HeroController = require('../controllers/superhero.controller');

// router.use('/superheroes', HeroController.createHero);

router.post('/superheroes', HeroController.createHero);
router.get('/superhero/:id', HeroController.getHero);
router.get('/superheroes', HeroController.getHeroes);
router.put('/superhero/:id', HeroController.updateHero);
router.delete('/superhero/:id', HeroController.deleteHero);
module.exports = router;
