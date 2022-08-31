const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Listing {
        _id: ID
        name: String
        description: String
        price: Float
        image: String
        userId: String
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        listings: [Listing]
        cart: [Listing]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
        users: [User]
        user: User
        listings: [Listing]
        listing(_id: ID!): Listing 
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addListing(name: String!, description: String!, price: Float!, image: String!): Listing
        addToCart(_id: ID!): Listing
        removeFromCart(_id: ID!): Listing
    }
`;

module.exports = typeDefs;
