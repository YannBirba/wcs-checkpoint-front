import { gql } from "@apollo/client";

export const getCountry = gql`
  query GetCountry($code: ID!){
    country(code){
      name
      code
      phone
      native
      capital
      currency
      emoji
      emojiU
    }
  }
`;
