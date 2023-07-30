import { setImages } from 'utils/imageResult';

/** 제목이 없어도 되는 경우는 ''로 표기해주시면 돼요. */
const titles = [
  '1', // 1
  '2', // 2
  '3', // 3
  '4', // 4
  '5', // 5
  '6', // 6
  '7', // 7
];

const BASE_URL =
  'https://raw.githubusercontent.com/glaxxkim/portfolio/main/src/assets/images/product';

const importAll = context => context.keys().map(context);
const imports = importAll(
  require.context('../../assets/images/product', false, /\.(png|jpe?g|svg)$/)
);

const half = Math.ceil(imports.length / 2);
const images = imports.splice(0, half).map(image => image);
const imageNumbering = images.map(image => image.slice(22, -25));
imageNumbering.sort((a, b) => a - b);

const product = setImages('product', BASE_URL, titles, imageNumbering);
export default product;
