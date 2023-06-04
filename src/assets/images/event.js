const titles = [
  '2023 INVITATION TRAINING PROGRAM ', // 1
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ', // 10
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ', // 20
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ',
  '2023 INVITATION TRAINING PROGRAM ', // 29
  'LIGETI FESTIVAL', // 30
  'LIGETI FESTIVAL',
  'LIGETI FESTIVAL',
  'LIGETI FESTIVAL',
  'LIGETI FESTIVAL',
  'LIGETI FESTIVAL',
  'LIGETI FESTIVAL',
  'LIGETI FESTIVAL',
  'LIGETI FESTIVAL',
  'LIGETI FESTIVAL',
  'LIGETI FESTIVAL', // 40
  'LIGETI FESTIVAL',
  'LIGETI FESTIVAL',
  'LIGETI FESTIVAL',
  'LIGETI FESTIVAL', //44
  'Superpowers For Your Web3 Stack', //45
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack', // 50
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack', // 60
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack', // 70
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack', // 80
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack',
  'Superpowers For Your Web3 Stack', // 89
  '2023 한양대학교 공학대학원 9회 학술대회', // 90
  '2023 한양대학교 공학대학원 9회 학술대회',
  '2023 한양대학교 공학대학원 9회 학술대회',
  '2023 한양대학교 공학대학원 9회 학술대회',
  '2023 한양대학교 공학대학원 9회 학술대회',
  '2023 한양대학교 공학대학원 9회 학술대회',
  '2023 한양대학교 공학대학원 9회 학술대회',
  '2023 한양대학교 공학대학원 9회 학술대회',
  '2023 한양대학교 공학대학원 9회 학술대회',
  '2023 한양대학교 공학대학원 9회 학술대회', // 100
  '2023 한양대학교 공학대학원 9회 학술대회',
  '2023 한양대학교 공학대학원 9회 학술대회',
  '2023 한양대학교 공학대학원 9회 학술대회',
  '2023 한양대학교 공학대학원 9회 학술대회',
  '2023 한양대학교 공학대학원 9회 학술대회',
  '2023 한양대학교 공학대학원 9회 학술대회', // 106
];
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
