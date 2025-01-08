import { useQuery, gql } from "@apollo/client"

const GET_ZINES =   gql`
  query MyQuery {
    allZines {
      pages {
        index
        image
      }
      id
      layout
      name
      sheet
    }
  }
`
const GET_ZINE = gql`
  query Zine($name: String!) {
    name
    pages
  }
`
