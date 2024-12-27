import { Zine } from '../types'
import Container from './Container'

type ZineListingProps = {
  zines: Zine[]
  setCurrentZine: () => {}
  children: ReactElement | undefined
}

const ZineListing: React.SFC<ZineListingProps> = (props) => {
  return (
    <div className="zine__listing flex gap-4 h-full justify-center flex-wrap overflow-y-auto">
      {
        props.zines.map((zine) =>
          <Container key={"zine_container__" + zine.id} onClick={() => props.setCurrentZine(zine)}>
            <div className="mb-2 max-w-9/12">{zine.name}</div>
          </Container>
        )
      }
    </div>
  )
}


export default ZineListing

