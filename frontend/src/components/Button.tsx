type ButtonProps = {
  text: string
  onClick: (event: React.MouseEvent<HTMLElement> | React.FormEvent) => void
  children: ReactElement
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className="bg-stone-300 p-2 hover:bg-sky-700" type="submit">
      {props.text}
    </button>
  )
}

export default Button
