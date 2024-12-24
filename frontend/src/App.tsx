import blackFlag from './logo-black-flag.svg'; 
import squatterZ from './squatter-z.svg'; 
import './App.css';  
import HeroBanner from './components/HeroBanner'
import ActionBar from './components/ActionBar';
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
    <div className="
    rounded-md bg-stone-400 w-36 h-16 
    hover:bg-sky-700 flex 
    justify-center items-center" 
    onClick={props.onClick}>
      { props.children }
    </div>
  )
}

type ButtonProps = {
  text: string
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  children: ReactElement
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
      <button onClick={props.onClick} className="bg-stone-300 h-16 w-36 hover:bg-sky-700" type="submit">{props.text}</button>
  )
}


const App = () => {
  const { loading, error, data } = useQuery(GET_ZINES)
  
  const [currentZine, setCurrentZine] = useState<Zine>(null)

  if (loading) return <p>Loading..</p>
  if (error) return <p>Error : {error.message}</p>


  return (
    <div className="App h-screen w-screen bg-stone-800 overflow-hidden">
      <div className="m-auto flex flex-col 
      items-center justify-start gap-12 
      h-full max-w-52"
      >
        <div className="basis-1/6">
          <img src={squatterZ} className="App-logo max-h-52 h-52 w-52" alt="logo" />
        </div>

        <HeroBanner>
          <div className="m-2">Open Source Zine Photocopier</div>
        </HeroBanner>


        {currentZine ? <Container><div className="bg-yellow-200">{currentZine.name}</div></Container> : null}

        <div className="zine__listing flex gap-4">
          { 
            data.allZines.map((zine)=>
              <Container  onClick={() => setCurrentZine(zine)}>
                <div className="w-22 h-18 ">{zine.name}</div>
              </Container>
            )
          }
        </div>

        <div className="">
          <ActionBar>
            <Button onClick={()=>{setCurrentZine(null)}} text="Reset"/>
          </ActionBar>
        </div>
      </div>
    </div>
  );
}

export default App;
