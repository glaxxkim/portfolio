/** 제목이 없어도 되는 경우는 ''로 표기해주시면 돼요. */
const titles = [
  'ROOKIEBUD 2023 S/S LOOKBOOK ', // 1
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ', // 10
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ', // 20
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ', // 30
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ', // 40
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ', // 50
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ',
  'ROOKIEBUD 2023 S/S LOOKBOOK ', // 60
  'ROOKIEBUD 2023 S/S LOOKBOOK ', 
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
    const currentIndex = index + 1;
    const isZero = currentIndex < 10 ? true : false;

    return {
      url: `${BASE_URL}/model_${
        isZero ? '0' + currentIndex : currentIndex
      }.jpg`,
      title: titles[index],
    };
  });

  return models;
};

export default model;
