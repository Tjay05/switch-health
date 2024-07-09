import Text from '@/src/components/typograpghy/Text.component';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styled from 'styled-components';

export const NotContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  width: 100%;
`;

export const NotWrapper = styled(View)`
  flex: 1;
  width: 90%;
  margin-horizontal: auto;
`;

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