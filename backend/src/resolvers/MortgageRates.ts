import { MortgageRate } from "@prisma/client";
import { getAllMortgageRates, getMortgageRatesByTermAndType } from "../services/mortgageRates/mortgageRates.service";

export const getAllMortgageRatesQuery = async(parent, args, context): Promise<MortgageRate[]> => {
  return await getAllMortgageRates()
};

export const getMortgageRatesByTermAndTypeQuery = async(parent, args, context): Promise<MortgageRate[]> => {

  const {term, type} = args;
  const response = await getMortgageRatesByTermAndType(term, type)
  return response;
};