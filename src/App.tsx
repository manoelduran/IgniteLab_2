import React, { useEffect } from 'react'
import Router from './router';
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';
import { BrowserRouter as Rotas } from 'react-router-dom';

function App() {

  return (
    <ApolloProvider client={client}>
      <Rotas>
        <Router />
      </Rotas>
    </ApolloProvider>
  )
}

export default App
