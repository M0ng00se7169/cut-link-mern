module.exports = {
  port: process.env.PORT,
  jwtSecret: process.env.SECRET,
  mongoUri: process.env.MONGO_URI,
  baseUrl: process.env.BASE_URL
};
