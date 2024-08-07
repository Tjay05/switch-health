import Text from "@/src/components/typograpghy/Text.component";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { styled } from "styled-components";

const { height } = Dimensions.get("window");

export const ProfileOverview = styled(ScrollView)`
  flex: 1;
  background-color: #fafbfc;
  height: 100%;
`;

export const HeaderText = styled(Text)`
  color: #fff;
`;

export const ProfileHead = styled(View)`
  position: absolute;
  top: 0;
  padding-bottom: ${height * 0.4}px;
  padding-horizontal: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[4]};
  border-radius: 0px 0px 36px 36px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1a1f71;
  z-index: -1;
`;

export const SvgWrap = styled(TouchableOpacity)`
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
  padding: ${(props) => props.theme.space[3]};
`;

export const StatsContainer = styled(View)`
  padding: ${(props) => props.theme.space[1]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StatsBox = styled(View)`
  align-items: center;
`;

export const ProfileMenu = styled(View)`
  padding-horizontal: ${(props) => props.theme.space[1]};
`;

export const TouchMenu = styled(TouchableOpacity)`
  padding-vertical: ${(props) => props.theme.space[3]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: #407ce221;
  border-bottom-width: 1px;
`;

export const MenuItems = styled(View)`
  align-items: center;
  flex-direction: row;
`;

export const MenuIcon = styled(View)`
  border-radius: 25px;
  padding: 10px;
  margin-bottom: ${(props) => props.theme.space[1]};
  background-color: #407ce221;
`;

export const MenuText = styled(Text)`
  margin-left: ${(props) => props.theme.space[3]};
`;

// Input Fields
export const TextLabel = styled(Text)`
  color: #1a1f71;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
`;

export const ProfInputs = styled(TextInput)`
  width: 100%;
  height: 40px;
  color: #262c3d;
  border: 1px solid #b0b3c7;
  border-radius: 15px;
  padding-horizontal: ${(props) => props.theme.space[3]};
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
  font-size: 14px;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const GenoGroup = styled(View)`
  flex: 1;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ProfileImg = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const CenteredText = styled(Text)`
  text-align: center;
`;

export const AddPicIcon = styled(View)`
  background-color: #fff;
  border: 1px solid #00000014;
  border-radius: 50px;
  padding: ${(props) => props.theme.space[2]};
  position: absolute;
  bottom: 0;
  right: 125px;
`;

export const Profstyles = StyleSheet.create({
  contentContainer: {
    paddingTop: 110, // Adjust height of header
  },
  tabFont: {
    fontFamily: "Poppins_400Regular",
  },
  viewWidth: {
    width: "45%",
  },
});

export const IconContainer = styled(View)`
  position: absolute;
  z-index: 444;
  top: 28%;
  left: 10px;
`;

export const InputContainer = styled(View)`
  position: relative;
  width: 100%;
`;
