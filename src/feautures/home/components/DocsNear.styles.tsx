import Text from "@/src/components/typograpghy/Text.component";
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import { Searchbar } from "react-native-paper";
import { styled } from "styled-components";

export const DocNearContainer = styled(View)`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 4;
`;

export const DocsNearBox = styled(View)`
  padding-vertical: ${(props)=> props.theme.space[2]};
  background-color: #fff;
  margin-horizontal: auto;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
`;

export const BookBtnWrap = styled(TouchableOpacity)`
  width: 75%;
  margin-horizontal: auto;
`;

export const BookAppWrap = styled(View)`
  flex:1;
  background-color: #fff;
`;