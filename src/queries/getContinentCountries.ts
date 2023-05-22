import { gql } from "@apollo/client";

export const getContinentCountries = gql`
  query GetContinentCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      name
      code
      native
      phone
      capital
      currency
      emoji
      emojiU
    }
  }
`;
