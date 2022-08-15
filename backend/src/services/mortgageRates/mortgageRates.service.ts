import { MortgageRate } from "@prisma/client";
import prisma from "../prisma/prisma.service";

export const getAllMortgageRates = async (): Promise<MortgageRate[]> => {
  return prisma.mortgageRate.findMany();
};

export const getMortgageRatesByTermAndType = async (term: number, type: string): Promise<MortgageRate[]> => {
    return prisma.mortgageRate.findMany({
        where: {
            year: term,
            rate_type: type
        },
        orderBy: {
            rate: "asc"
        }
    })
}