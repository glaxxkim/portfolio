const BASE_URL = 'https://raw.githubusercontent.com/glaxxkim/images/main/model';

const images = [
  {
    url: 'model_01.jpg',
    title: 'Tower',
  },
  {
    url: 'model_02.jpg',
    title: 'Tower',
  },
];

const model = () => {
  return images.map(({ url, title }) => {
    return {
      url: `${BASE_URL}/${url}`,
      title,
    };
  });
};

export default model;
