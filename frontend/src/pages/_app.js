import "../../styles/globals.css"
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { ApolloProvider, ApolloClient,InMemoryCache  } from '@apollo/client';



function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, intial-scale=1" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
