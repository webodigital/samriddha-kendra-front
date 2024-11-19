import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({ uri: import.meta.env.VITE_API_URL }), // Replace with your API endpoint
  cache: new InMemoryCache(),
});

export default client;
