//import './ActionBar.css';  
import { ReactElement } from 'react'
type ActionBarProps = {
  children: ReactElement
}

const ActionBar: React.SFC<ActionBarProps> = (props) => {
  return (props.children)
}


export default ActionBar