import blackFlag from './logo-black-flag.svg';
import squatterZ from './squatter-z.svg';
import './App.css';
import useFetch from './hooks/useFetch'
import HeroBanner from './components/HeroBanner'
import ActionBar from './components/ActionBar';
import Form from './components/Form';
import PageListing from './components/PageListing';
import { ReactElement, useState } from 'react'
import { Zine } from "./types"

type ContainerProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  children: ReactElement
}

const Container: React.SFC<ContainerProps> = (props) => {
  return (
    <div className="
    rounded-md bg-stone-400 w-20 h-32 
    hover:bg-sky-700 flex 
    justify-center items-center"
      onClick={props.onClick}>
      {props.children}
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
  const [zines, setZines] = useState<Zine[]>([])
  // TODO: Interpolate this with some sort of BASE_URL configuration
  const [data, loading] = useFetch(
    "http://localhost:8000/uploader/zines.json"
  );
  const [currentZine, setCurrentZine] = useState<Zine>(null)
  const [showZineForm, setShowZineForm] = useState<boolean>(false)

  return (
    <div className="App h-screen w-screen bg-stone-800 overflow-hidden">
      <div className="m-auto flex flex-col 
      items-center justify-between gap-12 
      h-full max-w-52"
      >
        <div className="basis-1/6 flex flex-col items-center justify-start gap-12 h-full max-w-52">
          <img src={squatterZ} className="App-logo max-h-32 h-36 w-36" alt="logo" />

          <HeroBanner>
            <div className="m-2">Open Source Zine Photocopier</div>
          </HeroBanner>
        </div>



        <div className="zine__listing flex flex-col items-center gap-6">
          {
            currentZine ? (
              <>
                <Container>
                  <div className="bg-yellow-200">
                    {currentZine.name}
                  </div>
                </Container>
                <PageListing key={"zine_" + currentZine.id} zine={currentZine}>
                </PageListing>
              </>
            ) : (null)
          }
          <div className="zine__listing flex gap-4">
            { showZineForm ? (<Form/>) : 
              loading ? (<p>Loading</p>) : (data.map((zine) => {
                return (
                  <Container key={"zine_container__" + zine.id} onClick={() => setCurrentZine(zine)}>
                    <div className="mb-2">{zine.name}</div>
                  </Container>
                )
              }))
            }
          </div>
        </div>

        <div className="">
          <ActionBar>
            <Button onClick={() => { setCurrentZine(null); setShowZineForm(true) }} text="New Zine" />
            <Button onClick={() => { setCurrentZine(null); setShowZineForm(false) }} text="Reset" />
          </ActionBar>
        </div>
      </div>
    </div>
  );
}

export default App;
