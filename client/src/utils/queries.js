import { gql } from "@apollo/client";

export const QUERY_LISTINGS = gql`
    query Query {
        listings {
            _id
            name
            description
            price
            image
            userId
        }
    }
`;

export const QUERY_LISTING = gql`
    query singleListing($id: ID!) {
        listing(_id: $id) {
            _id
            name
            description
            price
            image
        }
    }
`;

export const QUERY_USER = gql`
   query Query {
      user {
         _id
         firstName
         lastName
         email
         listings {
            _id
            name
            description
            price
            image
         }
      }
   }
`;

export const QUERY_ME = gql`
    query Query {
        me {
            _id
            firstName
            lastName
            email
            listings {
                _id
                name
                description
                price
                image
                userId
            }
            cart {
                _id
                name
                description
                price
                image
            }
        }
    }
`;
