import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { LogBtn } from "../../account/components/account.styles";
import { 
  AddressBox,
  AddressBoxwrap,
  AddressText,
  AddressWrap,
  ConfirmBtnWrap,
  ConfirmText,
  Map, 
  Search,
  SearchContainer
} from "../components/Home.styles";

const Emergency = ({ navigation }) => {
  return (
    <>
      <Map/>
      <SearchContainer>
        <Search
          placeholderTextColor={'#221F1F99'} 
          iconColor={'#221F1F99'}
          placeholder="Search location, ZIP code.."
        />
      </SearchContainer>
      <AddressBoxwrap>
        <AddressBox>
          <ConfirmText>Confirm your address</ConfirmText>
          <AddressWrap>
            <Spacer position="top" size="large">
              <Ionicons name="location" size={23} color={'red'} />
            </Spacer>
            <AddressText>Flat No. 50, Mahalaxmi Shop, Upkaar, 36, Barpokhar, Siwan, Bihar, Pincode-880212</AddressText>
          </AddressWrap>
          <ConfirmBtnWrap>
            <TouchableOpacity onPress={()=> navigation.navigate('Ambulance')}>
              <LogBtn>Confirm Location</LogBtn>
            </TouchableOpacity>
          </ConfirmBtnWrap>
        </AddressBox>
      </AddressBoxwrap>
    </>
  );
}
 
export default Emergency;