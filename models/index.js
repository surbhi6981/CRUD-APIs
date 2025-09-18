const Sequelize = require('sequelize');
const SequelConfig = require('../config/sequelizeconfig');
const sequelize = new Sequelize(
  SequelConfig.DB,
  SequelConfig.USER,
  SequelConfig.PASSWORD,
  {
    host: SequelConfig.HOST,
    dialect: SequelConfig.dialect
  }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model')(sequelize, Sequelize);

module.exports = db;
db.sequelize.authenticate()
  .then(() => {
    console.log('DB connection OK');
    return db.sequelize.sync({alter:true});             
  })
  .then(() => {
    console.log('Sequelize sync successful (tables created)');
  })
  .catch(err => {
    console.error('Sequelize error:', err);
  });


