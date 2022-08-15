import { gql } from '@apollo/client';

export const GET_ALL_MORTGAGE_RATES = gql`
  query getAllMortgageRatesQuery {
    getAllMortgageRatesQuery {
      rate_id
      source
      year
      rate
      rate_type
    }
  }
`;

export const GET_MORTGAGE_RATES_BY_TERM_AND_TYPE = gql`
  query getMortgageRatesByTermAndTypeQuery($term: Int!, $type: String!) {
    getMortgageRatesByTermAndTypeQuery(term: $term, type: $type) {
      rate_id
      source
      year
      rate
      rate_type
    }
  }
`;
