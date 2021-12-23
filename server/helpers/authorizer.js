const { maxAge, secret } = require("../config/settings");
const jwt = require("jsonwebtoken");
const { whisp, ignore } = require("./whisper");

const newAccessToken = (_id, tokenLifeTime = 1) => {
  return jwt.sign({ _id }, secret, {
    // if tokenLifeTime is null or falsy value, we set the Token's expiricy for 1 second instead of 1 day
    expiresIn: maxAge * (tokenLifeTime ? 1 : 0) + 1,
  });
};

// prettier-ignore
module.exports = {
  ping: (id, tokenLifeTime) => { // send a new jwt signed token to the user
    let accessToken = newAccessToken(id, tokenLifeTime);
    whisp(accessToken);
    return accessToken;
  },
  pong: () => {
    // receiving data from the user
    ignore();
  },
};
