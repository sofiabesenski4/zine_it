import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
// Eventually used for the Library feature.
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
})

const mountPoint = document.getElementById('root')
if (mountPoint == null) {
  throw new Error('no root element')
}
ReactDOM.createRoot(mountPoint).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
