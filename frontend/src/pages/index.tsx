import { GraphQLClient } from 'graphql-request';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { loadData } from 'src/lib/loadData';
import { PageContainer } from '../components';
import { RateData } from '../types/mortgageRate';

export interface Props {
  rates: RateData[];
  errorMessage: string;
}

export default function Calculator({ rates, errorMessage }: Props) {
  return (
    <>
      <Head>
        <title>Calculator</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <h1 className="pt-8 w-full text-gray-600 text-center font-bold text-2xl md:text-4xl">
        WOWA Challenge
      </h1>

      <PageContainer rates={rates} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const rates = await loadData();
    return {
      props: {
        rates,
      },

      // Revalidate every day (in seconds)
      revalidate: 86400 
    };


  } catch (error) {
    console.log(error);
    const errorMessage = 'Error loading rates';

    return {
      props: {
        rates: [],
        errorMessage,
      },
    };
  }
};
