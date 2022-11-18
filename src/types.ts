export type Product = {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
};

export type Filter = {
  num: Array<string>;
  name: Array<string>;
  count: Array<string>;
  year: Array<string>;
  shape: Array<string>;
  color: Array<string>;
  size: Array<string>;
  favorite: boolean;
};

export type Data = [
  {
    saveFilter: Filter;
    optionActive: string;
    sizeBasked: number;
  }
];
