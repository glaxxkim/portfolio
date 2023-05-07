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

const product = () => {
  const products = images.map((_, index) => {
    const isZero = index < 10 ? true : false;
    return {
      url: `${BASE_URL}/product_${isZero ? '0' + (index + 1) : index}.jpg`,
      title: titles[index],
    };
  });

  return products;
};

export default product;
