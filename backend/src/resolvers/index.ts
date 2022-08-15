import { getAllMortgageRatesQuery, getMortgageRatesByTermAndTypeQuery } from "./MortgageRates";

const resolvers = {
    // Queries
    Query: {
        getAllMortgageRatesQuery,
        getMortgageRatesByTermAndTypeQuery
    }
    // Mutations

}

export default resolvers;