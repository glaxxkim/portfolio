const titles = [
  'ROOKIEBUD 2023 S/S LOOKBOOK ', // 1
];

const BASE_URL =
  'https://raw.githubusercontent.com/glaxxkim/portfolio/main/src/assets/images/event';

const importAll = context => context.keys().map(context);
const imports = importAll(
  require.context('../../assets/images/event', false, /\.(png|jpe?g|svg)$/)
);

const half = Math.ceil(imports.length / 2);
const images = imports.splice(0, half).map(image => image);

const oneEvent = () => {
  const event = images.map((_, index) => {
    const currentIndex = index + 1;
    const isZero = currentIndex < 10 ? true : false;

    return {
      url: `${BASE_URL}/event_${
        isZero ? '0' + currentIndex : currentIndex
      }.jpg`,
      title: titles[index],
    };
  });

  return event;
};

export default oneEvent;
