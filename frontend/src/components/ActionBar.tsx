import { ReactElement } from 'react'
type ActionBarProps = {
  children: ReactElement[]
}

const ActionBar: React.FC<ActionBarProps> = (props) => {
  return (
    <div className="mb-8 flex gap-2">
      {props.children}
    </div>
  )
}

export default ActionBar
