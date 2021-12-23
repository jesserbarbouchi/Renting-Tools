const { environment } = require("../config/settings");

module.exports = {
  whisp: function () {
    if (environment !== "production") {
      console.log("✔️  ", ...arguments);
    }
  },
  gossip: function () {
    if (environment !== "production") {
      console.dir("✔️  ", ...arguments);
    }
  },
  yell: function () {
    if (environment !== "production") {
      console.error("❌  ", ...arguments);
    }
  },
  ignore: function () {
    return null;
  },
};
