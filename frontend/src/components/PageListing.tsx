import { ReactElement, useEffect, useState } from 'react'
import { Zine, Page } from '../types'

type PageCardProps = {
  zine: Zine
  page: Page
}
const PageCard: React.SFC<PageCardProps> = (props) => {
  return(
    <div className="flex flex-col bg-slate-400 h-32 w-20">

      <div>Page id: {props.page.id}</div>
      <div>index: {props.page.index}</div>

    </div>
        )
}

type PageListingProps = {
  zine: Zine
  children: ReactElement | undefined
}

const PageListing: React.FC<PageListingProps> = (props) => {
  const [pages, setPages] = useState<Page[]>([])
  const [loading, setLoading] = useState(true);


  async function fetchPages() {
    setLoading(true);
    const response = await fetch(`http://localhost:8000/uploader/pages?zine=${props.zine.id}`);
    const json = await response.json();
    setPages(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchPages();
  }, [props.zine.id])

  return (
    <>
      {
        loading ? <p>Loading</p>:
           <div className="flex flex-start flex-wrap justify-center gap-4 overflow-y-auto max-h-fit w-9/12">
           {
              pages.map((page) => {
                return(<div className="shrink-0" key={"zine_"+ props.zine.id +"_page_" + page.id}><PageCard page={page}></PageCard></div>)
              })
           }
           </div>
      }
    </>
  )
}


export default PageListing
