"use strict";

const axios = require("axios");
/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/models.html#life-cycle-callbacks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterUpdate(data) {
      console.log("updateHook");
      const a = {
        event_type: "hola",
      };
      axios
        .post(
          "https://api.github.com/repos/kylawamg/devspain-front/dispatches",
          a
        )
        .catch((err) => {
          console.log(err);
          // Ignore
        });
    },
  },
};
