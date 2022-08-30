import { gql } from "@apollo/client";

export const LOGIN = gql`
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         token
         user {
            firstName
            email
            listings {
               name
            }
         }
      }
   }
`;

export const ADD_USER = gql`
   mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
      addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
         token
         user {
            _id
         }
      }
   }
`;

export const ADD_LISTING = gql`
   mutation addListing($name: String!, $description: String!, $price: Float!, $image: String!) {
      addListing(name: $name, description: $description, price: $price, image: $image) {
         name
         description
         price
         image
         userId
      }
   }
`;
