import { Zine } from '../types'
import Container from './Container'

type ZineListingProps = {
  zines: Zine[]
  setCurrentZine: (zine: Zine | null) => void
}

const ZineListing: React.FC<ZineListingProps> = props => {
  return (
    <div data-test-id='zine__listing' className='flex gap-4 h-full justify-center flex-wrap overflow-y-auto'>
      {props.zines.map(zine => (
        <Container key={`zine_container__${zine.id}`} onClick={() => props.setCurrentZine(zine)}>
          <div data-test='zine' className='mb-2 max-w-9/12'>
            {zine.name}
          </div>
        </Container>
      ))}
    </div>
  )
}

export default ZineListing
