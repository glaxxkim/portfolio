export const color = {
  main: '#2852dc',
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
