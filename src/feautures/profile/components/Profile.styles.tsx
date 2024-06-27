import Text from "@/src/components/typograpghy/Text.component";
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { styled } from "styled-components";

const { height } = Dimensions.get('window');

export const ProfileOverview = styled(ScrollView)`
  flex: 1;
  background-color: #FAFBFC;
`;

export const HeaderText = styled(Text)`
  color: #fff;
`;

export const ProfileHead = styled(View)`
  position: absolute;
  top: 0;
  padding-bottom: ${height * .4}px;
  padding-horizontal: ${(props)=> props.theme.space[3]};
  padding-top: ${(props)=> props.theme.space[4]};
  border-radius: 0px 0px 36px 36px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1A1F71;
  z-index: -1;
`;

export const SvgWrap = styled(View)`
  position: absolute;
  width: 100%;
  top: 11%;
  z-index: 2;
  align-items: center;
`;

export const SetIconWrap = styled(TouchableOpacity)`
  right: 17px;
  top: 35px;
  position: absolute;
`;

export const ProfileContainer = styled(View)`
  flex: 1;
  width: 90%;
  border-radius: 20px;
  margin-horizontal: auto;
  margin-vertical: 30px;
  background-color: #fff;
  padding: ${(props)=> props.theme.space[3]};
`;

export const StatsContainer = styled(View)`
  padding: ${(props)=> props.theme.space[1]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StatsBox = styled(View)`
  align-items: center;
`;

export const ProfileMenu = styled(View)`
  padding-horizontal: ${(props)=> props.theme.space[1]};
`;

export const TouchMenu = styled(TouchableOpacity)`
  padding-vertical: ${(props)=> props.theme.space[3]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: #407CE221;
  border-bottom-width: 1px;
`;

export const MenuItems = styled(View)`
  align-items: center;
  flex-direction: row;
`;

export const MenuIcon = styled(View)`
  border-radius: 25px;
  padding: 10px;
  margin-bottom: ${(props)=> props.theme.space[1]};
  background-color: #407CE221;
`;

export const MenuText = styled(Text)`
  margin-left: ${(props)=> props.theme.space[3]};
`;

export const Profstyles = StyleSheet.create({
  contentContainer: {
    paddingTop: 110, // Adjust to the height of your header
  },
  tabFont: {
    fontFamily: 'Poppins_400Regular',
  },
});