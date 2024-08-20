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
  font-family: ${theme.fonts.outfitMedium};
  font-size: ${theme.fontSizes.button};
  color: ${theme.Colors.text.light};
`;

const shade = (theme:any) => `
  color: ${theme.Colors.text.light};
  font-size: ${theme.fontSizes.h6};
  text-align: center;
  font-family: ${theme.fonts.poppinsRegular};
`;

const error = (theme:any) => `
  color: ${theme.Colors.text.error};
  font-family: ${theme.fonts.poppinsRegular};
`;

const place = (theme:any) => `
  font-size: ${theme.fontSizes.info};
  font-family: ${theme.fonts.poppinsRegular};
`;

const caption = (theme:any) => `
  font-size: ${theme.fontSizes.h3};
  font-family: ${theme.fonts.interBold};
  text-align: center;
`;

const headText = (theme:any) => `
  font-size: ${theme.fontSizes.h3};
  font-family: ${theme.fonts.outfitBold};
`;

const label =(theme:any) => `
  font-family: ${theme.fonts.poppinsBold};
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.medium};
`;

const main = (theme:any) =>`
  font-family: ${theme.fonts.poppinsBold};
  font-size: ${theme.fontSizes.title};
  text-align: left;
`;

const main1 = (theme:any) =>`
  font-family: ${theme.fonts.poppinsBold};
  font-size: ${theme.fontSizes.info};
  text-align: left;
`;

const main2 = (theme:any) =>`
  font-family: ${theme.fonts.poppinsBold};
  font-size: ${theme.fontSizes.caption};
  text-align: left;
`;

const head = (theme:any) =>`
  color: ${theme.Colors.bg.dark};
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
  main1,
  main2,
  headText,
  head
};

const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = 'body', theme }) => variants[variant](theme)}
`;

export default Text;
