interface Zine {
  id: string
  name: string
  pages: Page[]
}

interface Page {
  id: string
  index: number
  image_src: string
}

export { Zine, Page }
