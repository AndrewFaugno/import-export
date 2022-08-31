const { AuthenticationError } = require("apollo-server-express");
const { User, Listing } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
   Query: {
      me: async (parent, args, context) => {
         if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
               .select('-__v -password')
               .populate('listings')

            return userData;
         }

         throw new AuthenticationError('Not logged in')
      },
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
      login: async (parent, { email, password}) => {
         const user = await User.findOne({ email });

         if (!user) {
            throw new AuthenticationError('Incorrect credentials');
         }

         const correctPw = await user.isCorrectPassword(password);

         if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
         }
         
         const token = signToken(user);
         return { token, user };
      },
      addUser: async (parent, args) => {
         const user = await User.create(args);
         const token = signToken(user);

         return { token, user };
      },
      addListing: async (parent, args, context) => {
         if (context.user) {
            const listing = await Listing.create({...args, userId: context.user._id});

            await User.findOneAndUpdate(
               { _id: context.user._id },
               { $push: { listings: listing._id } },
               { new: true }
            )

            return listing;
         }
      }
   }
};

module.exports = resolvers;