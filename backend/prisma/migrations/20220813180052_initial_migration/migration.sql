-- CreateEnum
CREATE TYPE "RateType" AS ENUM ('FIXED', 'VARIABLE');

-- CreateTable
CREATE TABLE "MortgageRate" (
    "id" SERIAL NOT NULL,
    "rate_id" INTEGER NOT NULL,
    "source" TEXT NOT NULL,
    "down_payment_level" DOUBLE PRECISION NOT NULL,
    "first_mortgage" BOOLEAN NOT NULL,
    "long_amortization" BOOLEAN NOT NULL,
    "rate_type" "RateType" NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "posted" BOOLEAN NOT NULL,
    "refinance_rate" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "MortgageRate_pkey" PRIMARY KEY ("id")
);
