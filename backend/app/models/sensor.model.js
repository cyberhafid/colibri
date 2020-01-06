module.exports = (sequelize, Sequelize) => {
  const Sensor = sequelize.define("sensor", {
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

  return Sensor;
};
