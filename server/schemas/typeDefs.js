const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Listing {
        _id: ID
        name: String
        description: String
        price: Float
        image: String
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        listings: [Listing]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: [User]
        user: User
        listings: [Listing]
        listing(_id: ID!): Listing 
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addListing(name: String!, description: String!, price: Float!, image: String!): Listing
    }
`;

module.exports = typeDefs;
