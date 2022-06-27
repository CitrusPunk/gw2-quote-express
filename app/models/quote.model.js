module.exports = (sequelize, Sequelize) => {
    const Quote = sequelize.define("quote", {
      text: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      }
    });
    return Quote;
  };