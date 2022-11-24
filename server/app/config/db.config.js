// setup database here, change the values to suit your environment
module.exports = {
  HOST: "satao.db.elephantsql.com",
  PORT: 5432,
  USER: "iyytyupl",
  PASSWORD: "Jy8H571mUBGV_rkNzV-pID19xZmywcmE",
  DB: "iyytyupl",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
