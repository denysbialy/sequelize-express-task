const { UniqueConstraintError } = require('sequelize');

module.exports.notFoundTask = async (err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).send({ errors: [err] });
};


module.exports.sequelizeUniqueEH = async (err, req, res, next) => {
  if (err instanceof UniqueConstraintError) {
    return res.status(409).send({ errors: [err] });
  }

  next(err);
};