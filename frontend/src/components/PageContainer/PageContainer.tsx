import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { RateData } from 'src/types/mortgageRate';
import { MortgageTable, MortgageCalculator } from '../index';
import {loadData} from "../../lib/loadData"


interface Props {
  rates: RateData[];
}

export default function PageContainer({ rates }: Props) {
  const [data, setData] = useState<RateData[]>(rates);
  const [termLength, setTermLength] = useState<number | null>(5);
  const [type, setType] = useState<string | null>('fixed');
  const [homePrice, setHomePrice] = useState<number>(500000);
  const [downPayment, setDownPayment] = useState<number>(10);
  const [mortgageAmount, setMortgageAmount] = useState<number>(450000);
  const [amortization, setAmortization] = useState<number>(25);
  const [downPaymentLevel, setDownPaymentLevel] = useState(1)


const fetchData = async() => {
  if(termLength != null && type != null) {
   const response = await loadData(termLength, type)
   setData(response)
  }
}

useEffect(() => {
  setMortgageAmount(homePrice - (downPayment / 100) * homePrice);
}, [homePrice, downPayment]);

useEffect(() => {
    fetchData()
}, [termLength, type])

  return (
    <>
      <Container className="flex justify-center">
        <Box className="flex flex-col w-full lg:flex-row bg-white justify-center border-t rounded shadow-md mt-4 xl:mt-6 max-w-5xl">
          <MortgageCalculator
            termLength={termLength}
            setTermLength={setTermLength}
            type={type}
            setType={setType}
            homePrice={homePrice}
            setHomePrice={setHomePrice}
            downPayment={downPayment}
            setDownPayment={setDownPayment}
            mortgageAmount={mortgageAmount}
            setMortgageAmount={setMortgageAmount}
            amortization={amortization}
            setAmortization={setAmortization}
            downPaymentLevel={downPaymentLevel}
            setDownPaymentLevel={setDownPaymentLevel}
          />
          <MortgageTable
            data={data}
            mortgageAmount={mortgageAmount}
            amortization={amortization}
          />
        </Box>
      </Container>
    </>
  );
}
