import { gql } from "@apollo/client";

export const QUERY_LISTINGS = gql`
   query getListings {
      listings {
         _id
         name
         description
         price
         image
      }
   }
`;

export const QUERY_LISTING = gql`
   query singleListing($id: ID!) {
      listing(_id: $id) {
         name
         _id
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
