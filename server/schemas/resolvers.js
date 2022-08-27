const { AuthenticationError } = require("apollo-server-express");
const { User, Listing } = require("../models");
const { signToken } = require('../utils/auth');

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
      user: async (parent, args, context) => {
         if (context.user) {
            const user = await User.findById(context.user._id).populate('listings')
            return user;
         }
         
         throw new AuthenticationError('Not logged in');
      }
   },
   Mutation: {
      addUser: async (parent, args) => {
         const user = await User.create(args);
         const token = signToken(user);

         return { token, user };
      }
   }
};

module.exports = resolvers;