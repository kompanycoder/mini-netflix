const config = {
  production: {
    online : "prod-mode",
    dbUrl: "mongodb+srv://kompany:<password>@cluster0-vgfi8.mongodb.net/test?retryWrites=true&w=majority"
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