import { ReactElement } from 'react'

type ContainerProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  children: ReactElement
}

const Container: React.FC<ContainerProps> = (props) => {
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

export default Container
