import blackFlag from './logo-black-flag.svg';
import squatterZ from './squatter-z.svg';
import './App.css';
import HeroBanner from './components/HeroBanner'
import ActionBar from './components/ActionBar';
import PageListing from './components/PageListing';
import { ReactElement, useState, useEffect } from 'react'
import { Zine } from "./types"
import { useForm, SubmitHandler } from "react-hook-form"

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
  onClick: (event: React.MouseEvent<HTMLElement> | React.FormEvent) => void
  children: ReactElement
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className="bg-stone-300 p-2 hover:bg-sky-700" type="submit">{props.text}</button>
  )
}

async function createZine(inputs: Inputs) {
  let url = "http://localhost:8000/uploader/zines/"

  return await fetch(url, {
    body: JSON.stringify(inputs),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    method: "POST"
  })
}

async function deleteZine(zine: Zine) {
  let url = `http://localhost:8000/uploader/zines/${zine.id}/`

  return await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    method: "DELETE"
  })
}


type ZineInputs = {
  name: string
  // TODO: Add a hidden author field to this.
}


const App = () => {
  const [zines, setZines] = useState<Zine[]>([])
  const [loading, setLoading] = useState(true);

  async function fetchZines() {
    setLoading(true);
    const response = await fetch("http://localhost:8000/uploader/zines.json");
    const json = await response.json();
    await setZines(json);
    await  setLoading(false);
  }

  // Always start by showing all zines in the database.
  useEffect(() => {
    fetchZines();
  }, []);

  const [showZineForm, setShowZineForm] = useState<boolean>(false)
  const [currentZine, setCurrentZine] = useState<Zine | null>(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ZineInputs>()

  const onCreateZineSubmit: SubmitHandler<ZineInputs> = (data) => {
    createZine(data).then((json) => fetchZines()).then(()=>setShowZineForm(false))
  }

  const onDeleteZine = (zine: Zine) => {
    deleteZine(zine).then(()=> fetchZines()).then(()=> setCurrentZine(null))
  }

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
                <PageListing zine={currentZine}>
                  <></>
                </PageListing>
              </>
            ) : (null)
          }
          <div className="zine__listing flex gap-4">
            {showZineForm ? (
              <form onSubmit={handleSubmit(onCreateZineSubmit)}>
                <div className="flex flex-col items-center gap-6">
                  {/* register your input into the hook by invoking the "register" function */}
                  {/* include validation with required or other standard HTML validation rules */}
                  <input {...register("name", { required: true })} />
                  {/* errors will return when field validation fails  */}
                  {errors.name && <span>This field is required</span>}

                  {/* TODO: Add hidden author field to this form. */}
                  <Button text="Save">
                    <input type="submit" />
                  </Button>
                </div>

              </form>
            ) :
              !!loading ? (<p>Loading</p>) : (
                !currentZine && zines.map((zine) =>
                      <Container key={"zine_container__" + zine.id} onClick={() => setCurrentZine(zine)}>
                        <div className="mb-2">{zine.name}</div>
                      </Container>
                    )


              )
            }
          </div>
        </div>


          <ActionBar>
            {!showZineForm && <Button onClick={() => { setCurrentZine(null); setShowZineForm(true) }} text="New Zine" />}
            {!!currentZine && <Button onClick={() => onDeleteZine(currentZine)} text="Delete Zine" />}
            {(showZineForm || currentZine || showZineForm) && <Button onClick={() => { setCurrentZine(null); setShowZineForm(false) }} text="Back" />}
          </ActionBar>

      </div>
    </div>
  );
}

export default App;
