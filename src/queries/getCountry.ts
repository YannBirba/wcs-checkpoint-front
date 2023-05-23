import { gql } from "@apollo/client";

export const getCountry = gql`
  query GetCountry($code: ID!){
    country(code: $code){
      name
      code
      capital
      currency
    }
  }
`;
