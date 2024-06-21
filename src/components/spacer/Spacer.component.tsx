import { View } from "react-native";
import { styled, useTheme } from "styled-components";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  extraLarge: 4,
  XXL: 5,
}

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  bottom: 'marginBottom',
  right: 'marginRight'
}

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value }` 
};

// console.log(positionVariant);

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

const Spacer = ({ position = 'top', size = 'small', children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return(
    <SpacerView variant={variant}>{children}</SpacerView>
  ) 
};

export default Spacer;
