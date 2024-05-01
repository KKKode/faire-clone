interface INavbarType {
  _id: string;
  title: string;
  feature: {
    img: string;
    title: string;
    description: string;
  };
  arr: {
    header: string;
    subArr: {
      subHeader: string;
      list?: string[];
    }[];
  }[];
}
