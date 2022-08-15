import { Box, TableRow, TableCell, Avatar, Typography } from '@mui/material';
import { monthlyPaymentCalculation, transformCompanyName,} from '../../utils/helpers';

interface Props {
  id: number;
  source: string;
  rate: number;
  year: number;
  mortgageAmount: number;
  amortization: number;
}

export default function MortgageTableItem({
  id,
  source,
  rate,
  year,
  mortgageAmount,
  amortization,
}: Props) {
  
  
  const monthlyPayment = monthlyPaymentCalculation(
    mortgageAmount,
    rate,
    amortization
  );

  const transformedCompanyName = transformCompanyName(source);

  return (
    <TableRow key={id} className="border-b w-full">
      <TableCell className="py-4 px-1 sm:px-4 text-gray-700">
        <Box className="flex items-center">
          <img src={`/logos/${transformedCompanyName}.png`} className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 md:mr-4 mr-2" />
          <Typography variant="body1">{source}</Typography>
        </Box>
      </TableCell>
      <TableCell className="md:px-8 pl-6 xs:pl-0">
        <Box className="flex flex-col justify-center items-center md:text-3xl sm:text-2xl text-xl font-bold text-gray-500">
          {rate}%
          <Box className="text-sm hidden whitespace-nowrap sm:block text-gray-400 font-normal">
            {year}-YEAR FIXED
          </Box>
        </Box>
      </TableCell>
      <TableCell className="hidden md:table-cell md:px-1 px-1">
        <Box className="flex justify-center">
          <Box className="border-b-2 border-orange-500 text-gray-500 md:text-2xl sm:text-xl text-lg">
            ${Intl.NumberFormat().format(monthlyPayment)}
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  );
}
