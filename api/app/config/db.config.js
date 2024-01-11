module.exports = {
  HOST: "localhost",
  USER: "quentin",
  PASSWORD: "password",
  DB: "tp-auth",
  dialect: "postgresql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
