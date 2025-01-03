//import './ActionBar.css';  
import { ReactElement } from 'react'
type ActionBarProps = {
  children: ReactElement
}

const ActionBar: React.SFC<ActionBarProps> = (props) => {
  return (
    <div className="mb-8 flex gap-2">
        {props.children}
    </div>    
  )
}

export default ActionBar
