module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    available: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  });
  return Tutorial;
};
