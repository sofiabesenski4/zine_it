import logo from './logo-black-flag.svg'; 
import './App.css';  
import { ReactElement, useState } from 'react'
import { useQuery, gql } from "@apollo/client"

const Button = () => {
  return (
    <button type="submit"></button>
  )
}

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
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;
const GET_ZINE = gql`
  query Zine($name: String!) {
    name
    pages
  }
`

type ContainerProps = {
  children: ReactElement
}

const Container: React.SFC<ContainerProps> = (props) => {
  return (
    <div className="container">
    { props.children }
    </div>
  )
}


const App = () => {
  const { loading, error, data } = useQuery(GET_ZINES)
  const [currentZine, setCurrentZine] = useState<string>(null)


  if (loading) return <p>Loading..</p>
  if (error) return <p>Error : {error.message}</p>


  return (
    <div className="App h-screen w-screen overflow-hidden">
      <div className="flex flex-col bg-[#1da1f2] items-center justify-center gap-12 h-full">
        <div className="flex-none">
          <img src={logo} className="App-logo flex-none h-50 w-50" alt="logo" />
        </div>

        <div>
          <h1 className="text-3xl font-bold underline">
            Zine it! 
          </h1>
        </div>

        { 
          currentZine ? <div>{currentZine}</div> : 
            <div className="zine__listing flex">
              { data.allZines.map((zine)=>
                  <Container>
                    {zine.name}
                  </Container>
              )}
            </div>
        }
      </div>
    </div>
  );
}

export default App;
