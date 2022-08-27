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

    type Query {
        users: [User]
        listings: [Listing]
        listing(_id: ID!): Listing 
    }
`;

module.exports = typeDefs;
