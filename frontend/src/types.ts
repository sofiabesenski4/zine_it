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

export { Zine, ZineInputs, Page };
