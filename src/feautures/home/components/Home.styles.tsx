import Text from "@/src/components/typograpghy/Text.component";
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import { Searchbar } from "react-native-paper";
import { styled } from "styled-components";

export const AppContainer = styled(View)`
  flex: 1;
  width: 90%;
  margin-horizontal: auto;
  margin-top: ${(props)=> props.theme.space[3]};
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

export const ProfileContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const GreetContainer = styled(View)`
  margin-left: ${(props)=> props.theme.space[2]}
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

export const SearchInput = styled(Searchbar)`
  width: 100%;
  background: #FBFBFB; 
  border-radius: 35px;
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
  color: #757575;
  font-size: 6px;
  border: 1px solid #CBCBCB
`;

export const CategoriesContainer = styled(View)`
  width: 100%;
`;

export const CategoryScroll = styled(ScrollView)`
  flex-direction: column;
  width: 100%;
`;

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

export const ArticleContainer = styled(View)`
  width: 100%;
  flex: 1
`;

export const TouchableArticle = styled(TouchableOpacity)`
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

export const ArticleInfo = styled(View)`
  width: 77%;
`;

export const ArticleText = styled(View)`
  flex-direction: row;
`;

export const HomeStyles = StyleSheet.create({
  greeting: {
    fontSize: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  indexes: {
    flexDirection: 'column',
    marginVertical: 20,
  },
  indexesChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  indexBox: {
    width: '48%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  indexTitle: {
    fontSize: 18,
    color: '#666',
  },
  indexValue: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  indexUnit: {
    fontSize: 18,
    color: '#666',
  },
  categoryText: {
    fontSize: 10,
  },
  articleText: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  articleDate: {
    color: '#888',
    fontSize: 12,
  },
  articleReadTime: {
    color: '#888',
    fontSize: 12,
  },
  whiteWrapper: {
    backgroundColor: '#FAFBFC',
  },
  emergency: {
    position: 'absolute',
    right: 18,
    bottom: 10,
    backgroundColor: '#FF0000',
  }
});

export const DoctorWraapper = styled(ScrollView)`
  background-color: #fff;
`;

export const TopDoctorsContainer = styled(View)`
  flex-direction: column;
  flex: 1;
`;

export const DocIMage = styled(Image)`
  width: 105px;
  height: 96px;
  border-radius: 6px;
`;

export const DocDetails = styled(View)`
  width: 61%;
  align-items: flex-start;
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
  flex: 1;
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