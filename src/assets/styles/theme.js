export const color = {
  main: '#416bf7',
};

export const flex = (
  direction = 'row',
  align = 'center',
  justify = 'center',
  gap = 0
) => `
display: flex;
flex-direction: ${direction};
align-items: ${align};
justify-content: ${justify};
gap: ${gap + 'px'};
`;

export const theme = {
  flex,
  color,
};
