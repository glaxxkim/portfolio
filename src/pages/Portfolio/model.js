const images = [
  {
    url: 'https://drive.google.com/file/d/1eXT1IUH5LqqrqPZR-xUHpOA75g5nIKzB/view?usp=sharing',
    title: 'Tower',
  },
  {
    url: 'https://drive.google.com/file/d/1eXT1IUH5LqqrqPZR-xUHpOA75g5nIKzB/view?usp=sharing',
    title: 'Tower',
  },
  {
    url: 'https://drive.google.com/file/d/19NFWRd49I5YfdHydn4sHWsmbgMbllJzm/view?usp=sharing',
    title: 'Tower',
  },
  {
    url: 'https://drive.google.com/file/d/1eXT1IUH5LqqrqPZR-xUHpOA75g5nIKzB/view?usp=sharing',
    title: 'Tower',
  },
];

/**
 *
 * 아래부터는 url 가공 로직
 *
 */
const getUrl = url => {
  const sliceIndex = url.indexOf('/view?usp=');
  const imageId = url.slice(32, sliceIndex);
  return `https://drive.google.com/uc?export=view&id=${imageId}`;
};

const model = () => {
  return images.map(({ url, title }) => {
    return {
      url: getUrl(url),
      title,
    };
  });
};

export default model;
