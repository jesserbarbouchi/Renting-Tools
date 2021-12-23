const path = require("path");
const dotenv = require("dotenv");
let environment;
if (process.env.NODE_ENV) {
  environment = process.env.NODE_ENV; // this variable will be exported into the whiper.js to disable the console.log in production
  dotenv.config({
    path: path.resolve(`.env.${environment}`), // either .env.production or .env.development
  });
} else {
  dotenv.config(); // will load all environment variable from the .env file, and put it inside the process.env variable
}
console.log("AAAAAAAAa", process.env.NODE_ENV);

mongo_url =
  (process.env.MONGO_PROTOCOL ? process.env.MONGO_PROTOCOL : "mongodb://") +
  (process.env.MONGO_USERNAME ? `${process.env.MONGO_USERNAME}:` : "") +
  (process.env.MONGO_PASSWORD ? `${process.env.MONGO_PASSWORD}` : "") +
  (process.env.MONGO_DOMAIN_NAME
    ? `${process.env.MONGO_DOMAIN_NAME}/`
    : "localhost/") +
  (process.env.DATABASE_NAME ? process.env.DATABASE_NAME : "test");

module.exports = {
  port: process.env._SERVER_PORT_NUMBER_ || 5000,
  environment,
  database: {
    mongodb: {
      url: mongo_url,
    },
    mysql: {
      url: "",
    },
  },
  keys: {
    google: {
      clientID: process.env.GOOGLE_PLUS_CLIENT_ID,
      clientSecret: process.env.GOOGLE_PLUS_SECRET,
    },
    session: {
      cookieKey: "WzA9bW8Fwb0XwnAp1TG4dHx3R3wkgTx3gX0hIXK2YBPkOdyDU4vXAR",
    },
    vonage: {
      apiKey: process.env.VONAGE_API_KEY,
      apiSecret: process.env.VONAGE_API_SECRET,
    },
  },
  email: {
    serverEmail: process.env.MAIL_LOGIN,
    serverPassword: process.env.MAIL_PASSWORD,
    testerEmail: process.env.MY_TESTING_EMAIL,
    hostName: process.env.HOST_NAME,
    domainName: process.env.DOMAIN_NAME,
    realURL: process.env.REAL_URL,
  },
  secret: process.env.SECRET,
};
