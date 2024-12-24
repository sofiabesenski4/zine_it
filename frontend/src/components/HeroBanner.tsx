import './HeroBanner.css';  
import { ReactElement } from 'react'

type HeroBannerProps = {
  children: ReactElement
}

const HeroBanner: React.SFC<ContainerProps> = (props) => {
  return (
    <div className="ripped-border bg-white w-screen bg-[#f4f2e7]">
      <h1 className="text-3xl text m-auto w-36 font-bold underline">
        Zine it! 
      </h1>
      { props.children }
    </div>
  )
}


export default HeroBanner 
