import {
  Select,
  MenuItem,
  FormControl,
  TextField,
  InputAdornment,
  Box,
  Container,
} from '@mui/material';
import { useEffect } from 'react';

interface Props {
  termLength: number;
  setTermLength: React.Dispatch<React.SetStateAction<number>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  homePrice: number;
  setHomePrice: React.Dispatch<React.SetStateAction<number>>;
  downPayment: number;
  setDownPayment: React.Dispatch<React.SetStateAction<number>>;
  mortgageAmount: number;
  setMortgageAmount: React.Dispatch<React.SetStateAction<number>>;
  amortization: number;
  setAmortization: React.Dispatch<React.SetStateAction<number>>;
  downPaymentLevel: number;
  setDownpaymentLevel: React.Dispatch<React.SetStateAction<number>>;
}

export default function MortgageCalculator({
  termLength,
  setTermLength,
  type,
  setType,
  homePrice,
  setHomePrice,
  downPayment,
  setDownPayment,
  mortgageAmount,
  setMortgageAmount,
  amortization,
  setAmortization,
  downPaymentLevel,
  setDownPaymentLevel,
}: Props) {
  const handleTermChange = (e) => {
    setTermLength(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleHomePriceChange = (e) => {
    // check if num begins with 0 
    if(/^[0][0-9]/.test(e.target.value)) {
      setHomePrice(parseInt(e.target.value, 10))
      return;
    }

    if (e.target.value == '' || e.target.value <= 0) {
      setHomePrice(0);
    } else {
      const numWithRemovedCommas = e.target.value.replace(/\,/g, '');

      if (numWithRemovedCommas <= 0) return;

      setHomePrice(parseInt(numWithRemovedCommas));
    }
  };

  const handleDownPaymentChange = (e) => {
    // check if num begins with 0 
    if(/^[0][0-9]/.test(e.target.value)) {
      setDownPayment(parseInt(e.target.value, 10))
      return;
    }

    if (e.target.value == '' || e.target.value <= 0) {
      setDownPayment(0);
    } else {
      setDownPayment(e.target.value);
    }
  };

  const handleMortgageAmountChange = (e) => {
    // check if num begins with 0 
    if(/^[0][0-9]/.test(e.target.value)) {
      setMortgageAmount(parseInt(e.target.value, 10))
      return;
    }

    if (e.target.value == '') {
      setMortgageAmount(0);
    } else {
      const numWithRemovedCommas = e.target.value.replace(/\,/g, '');

      if (numWithRemovedCommas <= 0) return;

      setMortgageAmount(parseInt(numWithRemovedCommas));
    }
  };

  const handleAmortizationChange = (e) => {
    // check if num begins with 0 
    if(/^[0][0-9]/.test(e.target.value)) {
      setAmortization(parseInt(e.target.value, 10))
      return;
    }
    if(e.target.value < 0) return;

    if (e.target.value == '') {
      setAmortization(0);
    }
    else {
      setAmortization(e.target.value);
    }
  };

  useEffect(()=> {
    if(downPayment >= 20) {
      setDownPaymentLevel(2)
    }
    else {
      setDownPaymentLevel(1)
    }
  }, [downPayment])

  return (
    <Container className="max-w-[400px] lg:w-1/2 sm:w-4/5 p-4 lg:border-r">
      <form className="flex flex-col">
        <Box className="flex flex-row justify-between items-center lg:mt-6 w-full mb-4 sm:mb-0">
          <FormControl fullWidth>
            <Box className="text-primary-label-color mb-1">Term Length</Box>
            <Box className="text-xl color-black">
              <Select
                className="w-full"
                value={termLength}
                onChange={handleTermChange}
                color="warning"
              >
                <MenuItem value={1}>1 Year</MenuItem>
                <MenuItem value={2}>2 Years</MenuItem>
                <MenuItem value={3}>3 Years</MenuItem>
                <MenuItem value={4}>4 Years</MenuItem>
                <MenuItem value={5}>5 Years</MenuItem>
                <MenuItem value={6}>6 Years</MenuItem>
                <MenuItem value={7}>7 Years</MenuItem>
                <MenuItem value={8}>8 Years</MenuItem>
                <MenuItem value={9}>9 Years</MenuItem>
                <MenuItem value={10}>10 Years</MenuItem>
                <MenuItem value={25}>25 Years</MenuItem>
              </Select>
            </Box>
          </FormControl>
          <Box className="border-r-2 mx-2 mt-4"></Box>
          <FormControl fullWidth>
            <Box className="text-primary-label-color mb-1">Type</Box>
            <Box className="text-xl color-black">
              <Select
                className="w-full"
                value={type}
                onChange={handleTypeChange}
                color="warning"
              >
                <MenuItem value={'fixed'}>Fixed</MenuItem>
                <MenuItem value={'variable'}>Variable</MenuItem>
              </Select>
            </Box>
          </FormControl>
        </Box>
        <Box className="mt-4 w-full">
          <Box className="text-primary-label-color text-lg">Home Price</Box>
          <TextField
            className="w-full text-2xl"
            variant="standard"
            color="warning"
            value={homePrice.toLocaleString()}
            onChange={handleHomePriceChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            inputProps={{
              inputMode: 'decimal',
              maxLength: 13,
            }}
          />
        </Box>
        <Box className="mt-4 w-full">
          <Box className="text-primary-label-color text-lg">Downpayment</Box>
          <Box className="text-2xl text-black">
            <TextField
              value={downPayment}
              onChange={handleDownPaymentChange}
              className="w-full"
              variant="standard"
              color="warning"
              inputProps={{
                inputMode: 'decimal',
                maxLength: 2,
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Box>
        </Box>
        <Box className="mt-4 w-full">
          <Box className="text-primary-label-color text-lg">
            Mortgage Amount
          </Box>
          <Box className="text-2xl color-black">
            <TextField
              value={mortgageAmount.toLocaleString()}
              onChange={handleMortgageAmountChange}
              className="w-full"
              variant="standard"
              color="warning"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              inputProps={{
                inputMode: 'decimal',
                maxLength: 13,
              }}
            />
          </Box>
        </Box>
        <Box className="mt-4 w-full">
          <Box className="text-primary-label-color text-lg">Amortization</Box>
          <Box className="text-2xl color-black">
            <TextField
              value={amortization}
              onChange={handleAmortizationChange}
              className="w-full"
              variant="standard"
              color="warning"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Years</InputAdornment>
                ),
              }}
              inputProps={{
                inputMode: 'decimal',
                maxLength: 2,
              }}
            />
          </Box>
        </Box>
      </form>
    </Container>
  );
}
