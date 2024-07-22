import Text from "@/src/components/typograpghy/Text.component";
import { Image, ScrollView, View } from "react-native";
import { styled } from "styled-components";

export const ArticleWrapper = styled(View)`
  background-color: #FAFBFC;
  flex: 1;
  height: 100%;
`;

export const Articlecontainer = styled(View)`
  width: 95%;
  flex: 1;
  margin-horizontal: auto;
  margin-top: ${(props)=> props.theme.space[3]};
`;

// CARD STYLES
export const ArticleCard = styled(View)`
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  flex: 1;
  background-color: white;
  border: 1px solid #221F1F1A;
  border-radius: 5px;
  padding: ${(props)=> props.theme.space[2]};
  margin-bottom: ${(props)=> props.theme.space[3]};
  min-height: 75px;
`;

export const CardContainer = styled(View)`
  flex-direction: row;
  gap: ${(props)=> props.theme.space[2]};
  width: 90%;
  align-items: flex-start;
`;

export const ArticleImg = styled(Image)`
  width: 20%;
  height: 100%;
  border-radius: 5px;
`;

export const ArticleTextWrap = styled(View)`
  width: 80%;
  flex-direction: column;
  gap: ${(props)=> props.theme.space[1]};
`;
  
export const Title = styled(Text)`
  font-family: ${(props)=> props.theme.fonts.poppinsMedium};
  font-size: 13px;
  color: #565656;
`;

export const ArtFooter = styled(View)`
  flex-direction: row;
  gap: ${(props)=> props.theme.space[3]};
`;
  
export const Date = styled(Text)`
  font-family: ${(props)=> props.theme.fonts.poppinsMedium};
  font-size: ${(props)=> props.theme.fontSizes.min};
  color: #221F1F66;
`;

// Article Details
export const ArticleDetailContainer = styled(ScrollView)`
  width: 90%;
  flex: 1;
  margin-horizontal: auto;
  margin-top: ${(props)=> props.theme.space[3]};
`;

export const ArticleHead = styled(Text)`
  font-size: ${(props)=> props.theme.fontSizes.caption};
`;
  
export const ArticleDate = styled(Text)`
  color: #9B9B9B;
  font-size: ${(props)=> props.theme.fontSizes.body};
  font-family: ${(props)=> props.theme.fonts.poppinsMedium};
`;
  
export const AuthorContainer = styled(View)`
  flex-direction: row;
  gap: ${(props)=> props.theme.space[2]};
  align-items: center;
`;
  
export const AuthorImg = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;
  
export const AuthorName = styled(Text)`
  color: #565656;
  font-size: ${(props)=> props.theme.fontSizes.placeholder};
  font-family: ${(props)=> props.theme.fonts.poppinsMedium};
`;

export const ArticleDetailImg = styled(Image)`
  width: 100%;
  height: 280px;
  border-radius: 6px;
`;
  
export const ArticleInformation = styled(Text)`
  color: #565656;
  font-size: ${(props)=> props.theme.fontSizes.body};
  font-family: ${(props)=> props.theme.fonts.poppinsMedium};
`;
