module.exports = {
    HOST: "localhost",
    USER: "YOUR_USERNAME",
    PASSWORD: "YOUR_PASSWORD",
    DB: "gw2-quote",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };