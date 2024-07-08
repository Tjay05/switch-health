import Text from "@/src/components/typograpghy/Text.component";
import { TouchableOpacity, View } from "react-native";
import { styled } from "styled-components";

export const SettingWrapper = styled(View)`
  background-color: #fff;
  flex: 1;
`;

export const SettingContainer = styled(View)`
  width: 90%;
  margin-horizontal: auto;
  margin-vertical: ${(props)=> props.theme.space[3]};
`;

export const Menu = styled(TouchableOpacity)`
  padding-vertical: ${(props) => props.theme.space[3]};
  width: 100%;
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

export const MenuText = styled(View)`
  margin-left: ${(props) => props.theme.space[3]};
  flex-direction: column;
`;

export const MenuLittleText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.placeholder};
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
`;