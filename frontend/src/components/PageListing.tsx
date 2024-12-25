import { ReactElement } from 'react'
import { Zine, Page } from '../types'
import useFetch from '../hooks/useFetch'


type PageCardProps = {
  zine: Zine
  page: Page
}
const PageCard: React.SFC<PageCardProps> = (props) => {
  return( 
    <div className="bg-slate-400"> 
      Page id: {props.page.id}, index: {props.page.index}
    </div>
        )
}

type PageListingProps = {
  zine: Zine | null
  children: ReactElement
}

const PageListing: React.SFC<PageListingProps> = (props) => {
  const [data, loading] = useFetch(
    `http://localhost:8000/uploader/pages?zine=${props.zine.id}`
  );
 
  return (
    <>
      { 
        loading ? <p>Loading</p>:
           <div className="flex gap-4">
           {
              data.map((page) => {
                return(<PageCard key={"zine_"+ props.zine.id +"_page_" + page.id} page={page}></PageCard>)
              })
           }
           </div>

        

      }
    </>
  )
}


export default PageListing
