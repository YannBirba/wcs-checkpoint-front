import { gql } from "@apollo/client";

export const getContinents = gql`
  query GetContinents {
    continents {
      name
      code
    }
  }
`;
