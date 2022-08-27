const jwt = require("jsonwebtoken");

const secret = "thisismysecretshh";
const expiration = "2h";

module.exports = {
   signToken: function ({ firstname, email, _id }) {
      const payload = { firstname, email, _id };

      return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
   },
   authMiddleWare: function ({ req }) {
      // allows token to be sent via req.body, req.query, or headers
      let token = req.body || req.query || req.headers.authorization;

      // ["Bearer", "<tokenvalue"]
      if (req.headers.authorization) {
         token = token.split(" ").pop().trim();
      }

      if (!token) {
         return req;
      }

      try {
         const { data } = jwt.verify(token, secret, { maxAge: expiration });
         req.user = data;
      } catch {
         console.log("Invalid token");
      }

      return req;
   },
};
