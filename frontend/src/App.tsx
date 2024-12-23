import blackFlag from './logo-black-flag.svg'; 
import squatterZ from './squatter-z.svg'; 
import './App.css';  
import { ReactElement, useState } from 'react'
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

type ContainerProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  children: ReactElement
}

const Container: React.SFC<ContainerProps> = (props) => {
  return (
    <div className="rounded-md bg-stone-400 w-36 h-8 hover:bg-sky-700" onClick={props.onClick}>
      { props.children }
    </div>
  )
}

type ButtonProps = {
  text: string
  children: ReactElement
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
      <button className="bg-stone-300 h-24 w-44 hover:bg-sky-700" type="submit">{props.text}</button>
  )
}


const App = () => {
  const { loading, error, data } = useQuery(GET_ZINES)
  
  const [currentZine, setCurrentZine] = useState<Zine>(null)


  if (loading) return <p>Loading..</p>
  if (error) return <p>Error : {error.message}</p>


  return (
    <div className="App h-screen w-screen bg-stone-800 overflow-hidden">
      <div className="m-auto flex flex-col items-center justify-center gap-12 h-full max-w-52">
        <div className="flex-none">
          <img src={squatterZ} className="App-logo flex-none max-h-52 h-52 w-52" alt="logo" />
        </div>

        <div>
          <h1 className="text-3xl font-bold underline bg-[#1da1f2]">
            Zine it! 
          </h1>
        </div>
        {currentZine ? <Container><div>{currentZine.name}</div></Container> : null}

        <div className="zine__listing flex gap-2">
          { 
            data.allZines.map((zine)=>
              <Container  onClick={() => setCurrentZine(zine)}>
                <div className="w-22 h-18 ">{zine.name}</div>
              </Container>
            )
          }
        </div>

        <Button text="Test Button"/>
      </div>
    </div>
  );
}

export default App;
