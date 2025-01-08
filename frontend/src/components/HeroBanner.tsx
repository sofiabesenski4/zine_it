import './HeroBanner.css'
import { PropsWithChildren } from 'react'

const HeroBanner: React.FC<PropsWithChildren<{}>> = props => {
  return (
    <div className='ripped-border w-screen bg-[#f4f2e7]'>
      <h1 className='text-3xl text m-auto w-36 font-bold underline'>Zine it!</h1>
      {props.children}
    </div>
  )
}

export default HeroBanner
