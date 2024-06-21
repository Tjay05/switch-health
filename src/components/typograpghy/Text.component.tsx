import { styled } from "styled-components";

const defaultTextStyles = (theme:any) => `
  font-family: ${theme.fonts.interRegular};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.Colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body =(theme:any) => `
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme:any) => `
  font-family: ${theme.fonts.interMedium};
  font-size: ${theme.fontSizes.placeholder};
  color: ${theme.Colors.text.light};
`;

const shade = (theme:any) => `
  color: ${theme.Colors.text.light};
  font-size: ${theme.fontSizes.info};
  text-align: center;
  font-family: ${theme.fonts.poppinsRegular};
`;

const error = (theme:any) => `
  color: ${theme.Colors.text.error};
  font-family: ${theme.fonts.poppinsRegular};
`;

const place = (theme:any) => `
  font-size: ${theme.fontSizes.placeholder};
  font-family: ${theme.fonts.poppinsRegular};
`;

const caption = (theme:any) => `
  font-size: ${theme.fontSizes.caption};
  font-family: ${theme.fonts.interBold};
`;

const label =(theme:any) => `
  font-family: ${theme.fonts.poppinsBold};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
`;

const main = (theme:any) =>`
  font-family: ${theme.fonts.poppinsBold};
  font-size: ${theme.fontSizes.caption};
  text-align: left;
`;

const head = (theme:any) =>`
  color: ${theme.Colors.brand.tetiary};
  font-size: ${theme.fontSizes.title};
  font-family: ${theme.fonts.poppinsBold};
`;


const variants = {
  body,
  label,
  caption,
  error,
  hint,
  place,
  shade,
  main,
  head
};

const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = 'body', theme }) => variants[variant](theme)}
`;

export default Text;
