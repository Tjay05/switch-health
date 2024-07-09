import Text from '@/src/components/typograpghy/Text.component';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styled from 'styled-components';

export const NotContainer = styled(ScrollView)`
  flex: 1;
  background-color: #fff;
  width: 100%;
`;

export const NotWrapper = styled(View)`
  flex: 1;
  width: 90%;
  margin-horizontal: auto;
`;

export const NotificationSection = styled(View)`
  width: 100%;
`;

export const DateLabel = styled(Text)`
  background-color: #407CE20D;
  padding: 6px 9px;
  border-radius: 11px;
  align-self: center;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
`;

export const NotificationHeader = styled(View)`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const NotText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.info};
`;

export const TimeLabel = styled(Text)`
  font-size: 14px;
  color: #000000B5;
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
`;

export const NotificationBox= styled(View)`
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: ${(props) => props.theme.space[3]};
  background-color: #fff;
  border-bottom-color: #00000012;
  border-bottom-width: 1px;
  padding: ${(props) => props.theme.space[2]}
`;

export const NotificationText = styled(Text)`
  color: #565656;
  font-size: ${(props) => props.theme.fontSizes.body};
  flex: 1;
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
`;

// Notification Settings styles
export const Section = styled(View)`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-vertical: ${(props) => props.theme.space[4]}
`;

export const ToggleRow = styled(View)`
  flex-direction: column;
`;

export const SectionHeader = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.info};
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
  color: #000000;
`;

export const SectionDescription = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.min};
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
  color: #000000;
`;

export const Switch = styled.Switch``;

export const Divider = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const DividerLine = styled(View)`
  width: 77%;
  height: 1px;
  background-color: #00000033;
`;

export const DividerText = styled(Text)`
  width: 20%;
  color: #407BFF;
  font-size: ${(props) => props.theme.fontSizes.min};
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
`;