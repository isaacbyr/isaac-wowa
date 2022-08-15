
export type Rate = {
    rate_id: number;
    year: number;
    source: string;
    down_payment_level: number;
    first_mortgage: boolean;
    long_amortization: boolean;
    rate_type: string;
    rate: number;
    posted: boolean;
    refinance_rate?: number | null;
    type: string;
  }

  export type RateData = {
    rate_id: number;
    year: number;
    source: string;
    rate_type: string;
    rate: number;
  }