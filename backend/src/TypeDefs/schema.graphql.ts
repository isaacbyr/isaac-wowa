import { gql } from 'apollo-server-express';

const typeDefs = gql`
  # Queries
  type Query {
    getAllMortgageRatesQuery: [MortgageRate]
    getMortgageRatesByTermAndTypeQuery(term: Int!, type: String!): [MortgageRate]
  }

  # Mutations

  # Types
  type MortgageRate {
    rate_id: Int
    source: String!
    year: Int!
    down_payment_level: Float
    first_mortgage: Boolean
    long_amortization: Boolean
    rate_type: String
    rate: Float!
    posted: Boolean
    refinance_rate: Float
    type: String
  }
`;

export default typeDefs;
