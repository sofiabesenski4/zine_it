// Manually provided types, for now, for the ReST API

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

export type { Zine, Page }
