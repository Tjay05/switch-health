import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { styled } from "styled-components";

export const AppContainer = styled(View)`
  flex: 1;
  width: 90%;
  margin-horizontal: auto;
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
  background-color: white;
  width: 48%;
  border-radius: 25px;
  padding: ${(props)=> props.theme.space[3]};
  border: 1px solid #E8E8E8;
`;

export const IndexItem = styled(View)` 
`;

export const SearchInput = styled(TextInput)`
  width: 100%;
  height: 45px;
  border: 1px solid #221F1F1A;
  background: #F9FAFB; 
  border-radius: 25px;
  padding-left: 45px;
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
  color: #757575;
  font-size: ${(props) => props.theme.fontSizes.placeholder};
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
  border: 1px solid #221F1F1A;
  border-radius: 24px;
  padding: 12px;
  background-color: white;
`;

export const ArticleContainer = styled(View)`
  width: 100%;
  flex: 1
`;

export const TouchableArticle = styled(TouchableOpacity)`
  flex-direction: row;
  background-color: white;
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
    fontSize: 22,
  },
  name: {
    fontSize: 26,
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
});