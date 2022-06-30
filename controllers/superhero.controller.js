const createError = require('http-errors');
const { Superhero } = require('../models');

module.exports.createHero = async (req, res, next) => {
  try {
    const { body } = req;
    const superhero = await Superhero.create(body);
    res.send({ data: body });
  } catch (error) {
    next(error);
  }
};
module.exports.getHero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const superhero = await Superhero.findByPk(id);
    if (!superhero) {
      throw createError(404, 'Hero not found');
    }
    res.send({ data: superhero });
  } catch (error) {
    next(error);
  }
};
module.exports.getHeroes = async (req, res, next) => {
  try {
    const superheroes = await Superhero.findAll();
    console.log(superheroes);
    if (superheroes.length === 0) {
      throw createError(404, 'Heroes not found');
    }
    res.send({ data: superheroes });
  } catch (error) {
    next(error);
  }
};
module.exports.updateHero = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const [row, [superhero]] = await Superhero.update(body, {
      where: { id },
      returning: true,
    });
    if (!superhero) {
      throw createError(404, 'Hero not found');
    }
    res.send({ data: superhero });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteHero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const superhero = await Superhero.destroy({
      where: { id },
    });
    if (!superhero) {
      throw createError(404, 'Hero not found');
    }
    res.send({ data: superhero });
  } catch (error) {
    next(error);
  }
};
