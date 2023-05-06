import styled from 'styled-components';
import React from 'react';
import { theme } from 'assets/styles/theme';

const Masonry = ({ columnCount, children }) => {
  const childrenArray = React.Children.toArray(children);

  const childrenComponents = childrenArray.reduce((acc, child, index) => {
    const column = index % columnCount;
    const currentArray = [...acc];

    if (currentArray[column] === undefined) currentArray.push([child]);
    else currentArray[column].push(child);

    return currentArray;
  }, []);

  return (
    <Container>
      {childrenComponents.map((column, index) => {
        return <Column key={index}>{column}</Column>;
      })}
    </Container>
  );
};

export default Masonry;

const Container = styled.div`
  ${theme.flex('row', '', 'center', 24)};
  width: 100%;
`;

const Column = styled.div`
  ${theme.flex('column', '', '', 24)};

  img {
    width: 100%;
  }
`;
