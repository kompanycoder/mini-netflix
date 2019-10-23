let config = {
  production: {
    online : "prod-mode",
    dbUrl: "mongoDb on line Url"
  },
  development: {
    online: "dev-mode",
    port: process.env.PORT || 3000,
    dbUrl: "mongodb:localhost:netflixDb"
  }
};

module.exports = function get(env) {
    return config.production || config.development;
};