import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Layout from './components/Layout';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './screens/Home';

const Rockets = React.lazy(() => import('./screens/Rockets'));
const Home = React.lazy(() => import('./screens/Home'));
const Layout = React.lazy(() => import('./components/Layout'));

// graphql endpoint
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Layout>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/rockets' element={<Rockets />} />
                </Routes>
              </Layout>
            </Suspense>
          </Router>
      </ApolloProvider>
  </React.StrictMode>
);
