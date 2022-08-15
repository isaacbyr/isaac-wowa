import { GraphQLClient } from "graphql-request";
import { RateData } from "src/types/mortgageRate";
import { GET_MORTGAGE_RATES_BY_TERM_AND_TYPE } from "./mortgageRate";


const graphQlClient = new GraphQLClient(`http://localhost:4000/graphql`);

/**
 * 
 * Function to load interest rate data from database
 * Given a term and type return an array of type RateData
 * 
 */
export const loadData = async (
    term: number = 5,
    type: string = "fixed"
  ): Promise<RateData[]> => {
    let mortgageRates = [];
  
    const { getMortgageRatesByTermAndTypeQuery } = await graphQlClient.request(
      GET_MORTGAGE_RATES_BY_TERM_AND_TYPE,
      {
        term,
        type,
      }
    );
  
    mortgageRates = getMortgageRatesByTermAndTypeQuery;
  
    mortgageRates = mortgageRates.slice(0, 20);
  
    return mortgageRates;
  };
  