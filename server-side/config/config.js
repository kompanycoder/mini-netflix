const config = {
  production: {
    online : "prod-mode",
    dbUrl: "mongoDb on line Url"
  },
  development: {
    online: "dev-mode",
    port: process.env.PORT || 3000,
    dbUrl: "mongodb://localhost:27017/netflixDb"
  }
};

exports.get = (env)=> {
    return config[env] || config.development;
}