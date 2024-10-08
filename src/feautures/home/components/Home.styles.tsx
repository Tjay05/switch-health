import Text from "@/src/components/typograpghy/Text.component";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import { Searchbar } from "react-native-paper";
import { styled } from "styled-components";

export const AppWrapper = styled(ScrollView)`
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

export const AppContainer = styled(View)`
  flex: 1;
  width: 90%;
  margin-horizontal: auto;
  margin-vertical: ${(props)=> props.theme.space[3]};
`;

export const HeaderContainer = styled(View)`
  width: 100%;
`;

export const Header = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  width: 70%;
`;

export const GreetContainer = styled(View)`
  margin-left: ${(props)=> props.theme.space[2]}
`;

export const HelloText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h6};
  font-family: ${(props) => props.theme.fonts.spaceGroteskRegular};
`;

export const UserNameText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.spaceGroteskMedium};
  flex-wrap: wrap;
`;

export const IndexContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const IndexBox = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 48%;
  border-radius: 25px;
  padding: ${(props)=> props.theme.space[3]};
  border: 1px solid #E8E8E8;
`;

export const IndexItem = styled(View)` 
`;

export const IndexTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.info};
  font-family: ${(props) => props.theme.fonts.spaceGroteskMedium};
  color: #1E1E1E;
`;

export const IndexTextWrap = styled(View)`
  flex-direction: row;
  align-items: flex-end;
  gap: 3px;
  flex-wrap:wrap;
`;

export const IndexValue = styled(Text)`
  color: #1E1E1E;
  font-family: ${(props) => props.theme.fonts.spaceGroteskMedium};
  font-size: ${(props) => props.theme.fontSizes.h3};
`;

export const IndexUnit = styled(Text)`
  color: #1E1E1E;
  font-family: ${(props) => props.theme.fonts.spaceGroteskMedium};
  font-size: ${(props) => props.theme.fontSizes.info};
`;

export const SearchInput = styled(Searchbar)`
  width: 100%;
  background: #fff; 
  border-radius: 50px;
  color: #757575;
  font-size: 6px;
  border: 1px solid #CBCBCB
`;

export const CategoriesContainer = styled(View)`
  width: 100%;
`;

export const CategoryScroll = styled(ScrollView)``;

export const TouchableCategory = styled(TouchableOpacity)`
  flex-direction: column;
  align-items: center;
`;

export const CatIcon = styled(View)`
  border-radius: 30px;
  border: 1px solid #00000026;
  padding: 12px;
  margin-bottom: ${(props)=> props.theme.space[1]};
  background-color: white;
`;

export const CategoryText = styled(Text)`
  color: #221F1F;
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
  font-size: ${(props) => props.theme.fontSizes.tiny};
`;

export const ArticleContainer = styled(View)`
  width: 100%;
  flex: 1
`;

export const TouchableFlatlist = styled(TouchableOpacity)`
  width: 100%;
`;

export const TopicContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SeeText = styled(Text)`
  color: ${(props)=> props.theme.Colors.text.secondary};
`;

export const TouchableArticle = styled(TouchableOpacity)`
  width: 100%;
  flex: 1;
`;

export const DocCardWrapper = styled(View)`
  flex-direction: row;
  background-color: white;
  border: 1px solid #221F1F1A;
  border-radius: 5px;
  width: 100%;
  padding: ${(props)=> props.theme.space[2]};
  margin-vertical: ${(props)=> props.theme.space[2]};
`;

export const ArticleImg = styled(Image)`
  width: 20%;
  height: 100%;
  border-radius: 5px;
`;


export const ProfileImg = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const ArticleInfo = styled(View)`
  width: 77%;
`;

export const ArticleText = styled(View)`
  flex-direction: row;
`;

export const DoctorWraapper = styled(ScrollView)`
  background-color: #fff;
`;

export const TopDoctorsContainer = styled(View)`
  flex-direction: column;
  flex: 1;
`;

export const DocIMage = styled(Image)`
  width: 105px;
  height: 100%;
  border-radius: 6px;
`;

export const DocDetails = styled(View)`
  width: 61%;
  align-items: flex-start;
  justify-content: center;
`;

export const DocName = styled(Text)`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
`;

export const DocAOS = styled(Text)`
  font-size: 13px;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
  color: ${(props) => props.theme.Colors.bg.dark};
`;

export const RatingWrap = styled(View)`
  flex-direction: row;
  background: #407CE22B;
  padding-horizontal: ${(props)=> props.theme.space[1]};
  border-radius: 3px;
`; 

export const RatingText = styled(Text)`
  font-size: 12px;
  color: #407CE2;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
`;

export const DocLocation = styled(Text)`
  font-size: 12px;
  color: #221F1F66;
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
`;

export const SearchContainer = styled(View)`
  width: 100%;
  flex: 1;
  z-index: 4;
  position: absolute;
`;

export const Search = styled(Searchbar)`
  margin-horizontal: auto;
  width: 90%;
  margin-top: ${(props)=> props.theme.space[2]};
  background-color: #FFFFFF;
  border-radius: 32px;
  padding-vertical: 0px;
`;

// Map Styles
export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const AddressBoxwrap = styled(View)`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 4;
  margin-bottom: ${(props)=> props.theme.space[2]};
`;

export const AddressBox = styled(View)`
  padding-bottom: ${(props)=> props.theme.space[2]};
  background-color: #fff;
  margin-horizontal: auto;
  border-radius: 10px;
  width: 80%;
`;

export const ConfirmText = styled(Text)`
  font-size: 14px;
  color: #221F1F;
  font-family: ${(props) => props.theme.fonts.poppinsBold};
  padding-horizontal: ${(props)=> props.theme.space[3]};
  padding-vertical: ${(props)=> props.theme.space[2]};
  border-bottom-color: #407CE221;
  border-bottom-width: 1px;
`;

export const AddressWrap = styled(View)`
  flex-direction: row;
  padding-horizontal: ${(props)=> props.theme.space[2]};
  align-items: flex-start;
`;

export const AddressText = styled(Text)`
  font-size: 13px;
  padding: ${(props)=> props.theme.space[2]};
  color: #221F1F99;
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
`;

export const ConfirmBtnWrap = styled(Text)`
  width: 50%;
  margin-horizontal: auto;
`;

export const HomeStyles = StyleSheet.create({
  tstyles: {
    justifyContent: "space-between",
    gap: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  emergency: {
    position: 'absolute',
    right: 18,
    bottom: 10,
    backgroundColor: '#FF0000',
  }
});