module.exports = {
  HOST: "192.168.86.35",
  USER: "snistala",
  PASSWORD: "ibm22ibm",
  DB: "coursedb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
