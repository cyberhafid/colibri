module.exports = (sequelize, Sequelize) => {
  const Categorie = sequelize.define("categorie", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Categorie;
};
