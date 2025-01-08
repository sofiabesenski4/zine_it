import './App.css'
import ActionBar from './components/ActionBar'
import PageListing from './components/PageListing'
import ZineListing from './components/ZineListing'
import NavigationBar from './components/NavigationBar'
import { useState, useEffect, PropsWithChildren } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { fetchZines, createZine, deleteZine, ZineInputs } from './api'
import { Zine } from './types'

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLElement> | React.FormEvent) => void
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = props => {
  return (
    <button onClick={props.onClick} className='bg-stone-300 p-2 hover:bg-sky-700' type='submit'>
      {props.children}
    </button>
  )
}

const App = () => {
  const [zines, setZines] = useState<Zine[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  // Always start by showing all zines in the database.
  useEffect(() => {
    fetchZines(setLoading).then(json => setZines(json))
  }, [])

  const [showZineForm, setShowZineForm] = useState<boolean>(false)
  const [currentZine, setCurrentZine] = useState<Zine | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ZineInputs>()

  const onCreateZineSubmit: SubmitHandler<ZineInputs> = data => {
    createZine(data)
      .then(() => fetchZines(setLoading))
      .then(json => setZines(json))
      .then(() => setShowZineForm(false))
  }
  const onDeleteZineSubmit = (zine: Zine) => {
    deleteZine(zine)
      .then(() => fetchZines(setLoading))
      .then(json => setZines(json))
      .then(() => setCurrentZine(null))
  }

  // TODO: Use React Router to pull this into a different route.
  return (
    <div className='App h-screen w-screen bg-stone-800 overflow-hidden'>
      <div className='m-auto flex flex-col items-center justify-between gap-8 h-full w-11/12'>
        <NavigationBar showHeroBanner={!currentZine} />
        {currentZine ? (
          <PageListing zine={currentZine} />
        ) : (
          <ZineListing zines={zines} setCurrentZine={setCurrentZine} />
        )}
        {showZineForm ? (
          <form onSubmit={handleSubmit(onCreateZineSubmit)}>
            <div className='flex flex-col items-center gap-6'>
              <label className='text-slate-100'>Name</label>
              <input {...register('name', { required: true })} />
              {errors.name && <span>This field is required</span>}
              <Button>Save</Button>
            </div>
          </form>
        ) : (
          <></>
        )}

        <ActionBar>
          {!showZineForm && !currentZine && (
            <Button
              onClick={() => {
                setCurrentZine(null)
                setShowZineForm(true)
              }}
            >
              New Zine
            </Button>
          )}
          {!!currentZine && <Button onClick={() => onDeleteZineSubmit(currentZine)}>Delete Zine</Button>}
          {(showZineForm || currentZine || showZineForm) && (
            <Button
              onClick={() => {
                setCurrentZine(null)
                setShowZineForm(false)
              }}
            >
              Back
            </Button>
          )}
        </ActionBar>
      </div>
    </div>
  )
}

export default App
