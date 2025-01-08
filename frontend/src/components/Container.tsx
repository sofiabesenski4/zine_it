import { PropsWithChildren, Dispatch } from 'react'

type ContainerProps = {
  onClick: Dispatch<React.MouseEvent<HTMLElement>>
}

const Container: React.FC<PropsWithChildren<ContainerProps>> = props => {
  return (
    <div
      className='rounded-md bg-stone-400 w-20 h-32 hover:bg-sky-700 flex justify-center items-center'
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export default Container
