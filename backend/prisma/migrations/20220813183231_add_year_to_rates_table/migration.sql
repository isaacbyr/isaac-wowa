/*
  Warnings:

  - Added the required column `year` to the `MortgageRate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MortgageRate" ADD COLUMN     "year" INTEGER NOT NULL,
ALTER COLUMN "refinance_rate" DROP NOT NULL;
