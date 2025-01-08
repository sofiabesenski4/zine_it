import { PropsWithChildren } from 'react'

const ActionBar: React.FC<PropsWithChildren<{}>> = props => {
  return <div className='mb-8 flex gap-2'>{props.children}</div>
}

export default ActionBar
