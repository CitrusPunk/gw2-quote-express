module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define("author", {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    race: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });
  return Author;
};
