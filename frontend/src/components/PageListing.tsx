import { ReactElement, useEffect, useState } from 'react'
import { Zine, Page } from '../types'

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
           <div className="flex gap-4">
           {
              pages.map((page) => {
                return(<PageCard key={"zine_"+ props.zine.id +"_page_" + page.id} page={page}></PageCard>)
              })
           }
           </div>



      }
    </>
  )
}


export default PageListing
