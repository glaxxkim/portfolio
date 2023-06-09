const titles = [
  'A NOTE FROM 2023 S/S LOOKBOOK ', // 1
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ', // 10
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ', // 20
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ', // 30
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ', // 40
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ', // 50
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ',
  'A NOTE FROM 2023 S/S LOOKBOOK ', // 60
];

const BASE_URL =
  'https://raw.githubusercontent.com/glaxxkim/portfolio/main/src/assets/images/kids';

const importAll = context => context.keys().map(context);
const imports = importAll(
  require.context('../../assets/images/kids', false, /\.(png|jpe?g|svg)$/)
);

const half = Math.ceil(imports.length / 2);
const images = imports.splice(0, half).map(image => image);

const kid = () => {
  const kids = images.map((_, index) => {
    const currentIndex = index + 1;
    const isZero = currentIndex < 10 ? true : false;

    return {
      url: `${BASE_URL}/kids_${isZero ? '0' + currentIndex : currentIndex}.jpg`,
      title: titles[index],
    };
  });

  return kids;
};

export default kid;
