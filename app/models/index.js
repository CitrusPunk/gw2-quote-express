const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.quotes = require("./quote.model.js")(sequelize, Sequelize);
db.authors = require("./author.model.js")(sequelize, Sequelize);

// add author quote many to one relation
db.authors.hasMany(db.quotes, { as: "quotes" });
db.quotes.belongsTo(db.authors, {
  foreignKey: "quotesId",
  as: "quote",
});
module.exports = db;