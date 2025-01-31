interface Zine {
  id: string;
  name: string;
  pages: Page[];
}

interface Page {
  id: string;
  index: number;
  image_src: string;
}

type ZineInputs = {
  name: string;
};

type PageInputs = {
  index: number;
};

export { Zine, ZineInputs, Page, PageInputs };
