const BASE_URL =
  'https://raw.githubusercontent.com/glaxxkim/images/main/product';

const images = [
  {
    url: 'product_01.jpg',
    title: 'Tower',
  },
  {
    url: 'product_02.jpg',
    title: 'Tower',
  },
];

const product = () => {
  return images.map(({ url, title }) => {
    return {
      url: `${BASE_URL}/${url}`,
      title,
    };
  });
};

export default product;
