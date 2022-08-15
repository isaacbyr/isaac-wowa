/*
  Warnings:

  - Changed the type of `rate_type` on the `MortgageRate` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "MortgageRate" DROP COLUMN "rate_type",
ADD COLUMN     "rate_type" TEXT NOT NULL;

-- DropEnum
DROP TYPE "RateType";
