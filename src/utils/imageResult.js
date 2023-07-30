export const setImages = (type, url, titles, imageNumbering) => {
  const result = imageNumbering.map((n, index) => {
    return {
      url: `${url}/${type}_${n}.jpg`,
      title: titles[index],
    };
  });

  return result;
};
