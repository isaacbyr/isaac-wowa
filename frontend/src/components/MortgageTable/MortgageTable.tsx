import {
  Box,
  Container,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Avatar,
} from '@mui/material';
import { RateData } from 'src/types/mortgageRate';
import { MortgageTableItem } from '../index';

interface Props {
  data: RateData[];
  mortgageAmount: number;
  amortization: number;
}

export default function MortgageTable({ data, mortgageAmount, amortization }: Props) {

  return (
    <Container>
      <Table className="w-full">
        <TableHead>
          <TableRow>
            <TableCell
              className="font-normal border-b pb-1 pt-2 sm:px-4 text-md text-gray-700"
              align="center"
            >
              Lender
            </TableCell>
            <TableCell
              className="font-normal border-b pb-1 pt-2 sm:px-4 text-md text-gray-700"
              align="center"
            >
              Rate
            </TableCell>
            <TableCell
              className="hidden md:block font-normal border-b pb-1 pt-2 sm:px-4 text-md text-gray-700"
              align="center"
            >
              Monthly Payment
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data?.map((row) => (
              <MortgageTableItem
                id={row.rate_id}
                source={row.source}
                rate={row.rate}
                year={row.year}
                mortgageAmount={mortgageAmount}
                amortization={amortization}
              />
            ))
          ) : (
            <TableRow>
              <TableCell>
                Loading
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Container>
  );
}
