import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ZineDetails from './pages/ZineDetails';
import ZineNew from './pages/ZineNew';
import ZineIndex from './pages/ZineIndex';
import NavigationLayout from './layouts/NavigationLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Eventually used for the Library feature.
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
// const client = new ApolloClient({
//  uri: 'http://localhost:8000/graphql',
//  cache: new InMemoryCache(),
//});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<NavigationLayout />}>
        <Route path='/' element={<ZineIndex />} />
        <Route path='/zines/new' element={<ZineNew />} />
        <Route path='/zines/:zineId' element={<ZineDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
