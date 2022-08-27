const { AuthenticationError } = require("apollo-server-express");
const { User, Listing } = require("../models");

const resolvers = {
   Query: {
      listings: async () => {
         return await Listing.find();
      },
      listing: async (parent, { _id }) => {
         return await Listing.findById(_id);
      },
      users: async () => {
         return await User.find().select("-__v  -password").populate("listings");
      },
   },
};

module.exports = resolvers;