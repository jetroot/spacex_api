import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/Layout';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Rockets from './screens/Rockets';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <Router>
            <Layout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/rockets' element={<Rockets />} />
              </Routes>
            </Layout>
          </Router>
      </ApolloProvider>
  </React.StrictMode>
);
