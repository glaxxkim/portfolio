/** 제목이 없어도 되는 경우는 ''로 표기해주시면 돼요. */
const titles = [
  '제목1', // 1
  '제목2', // 2
  '제목3', // 3
  '제목4', // 4
  '제목5', // 5
  '제목6', // 6
  '제목7', // 7
];

const BASE_URL =
  'https://raw.githubusercontent.com/glaxxkim/portfolio/main/src/assets/images/model';

const importAll = context => context.keys().map(context);
const imports = importAll(
  require.context('../../assets/images/model', false, /\.(png|jpe?g|svg)$/)
);

const half = Math.ceil(imports.length / 2);
const images = imports.splice(0, half).map(image => image);

const model = () => {
  const models = images.map((_, index) => {
    const isZero = index < 10 ? true : false;
    return {
      url: `${BASE_URL}/model_${isZero ? '0' + (index + 1) : index}.jpg`,
      title: titles[index],
    };
  });

  return models;
};

export default model;
