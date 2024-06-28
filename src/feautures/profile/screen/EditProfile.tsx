import { Ionicons } from '@expo/vector-icons';
import { 
  GenoGroup,
  HeaderText,
  ProfileContainer,
  ProfileHead,
  ProfileOverview,
  ProfInputs,
  Profstyles as styles, 
  SetIconWrap, 
  SvgWrap,
  TextLabel,
} from '../components/Profile.styles';
import Spacer from '@/src/components/spacer/Spacer.component';
import Text from '@/src/components/typograpghy/Text.component';
import ProfSVG from '@/assets/icons/ProfileSvg';
import { StyleSheet, View } from 'react-native';
import { LogBtn } from '../../account/components/account.styles';
import { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { theme } from '@/src/infrastructure/theme';

const ProfileEdit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDOB] = useState('');
  const [height, setHeight] = useState('0');
  const [weight, setWeight] = useState('0');
  const [gender, setGender] = useState('Male');
  const [bloodGroup, setBloodGroup] = useState('a');
  
  return (
    <ProfileOverview contentContainerStyle={styles.contentContainer}>
      <ProfileHead>
        <HeaderText variant='main1'>Edit Profile</HeaderText>
        <SetIconWrap>
          <Ionicons name="settings" size={28} color="white" />
        </SetIconWrap>
      </ProfileHead>
      <SvgWrap>
        <ProfSVG width={100} height={100}/>
      </SvgWrap>
      <ProfileContainer>
        <Spacer position='top' size='XXL'>
          <TextLabel>First name & Last name</TextLabel>
          <ProfInputs
            placeholder="Enter your name"
            placeholderTextColor="#262C3D"
            value={name}
            textContentType="name"
            keyboardType='default'
            autoCapitalize="none"
            onChangeText={(e) => setName(e)}
            />
          <GenoGroup>
            <View style={styles.viewWidth}>
              <TextLabel>Gender</TextLabel>
              <RNPickerSelect
                value={gender}
                style={pickerSelectStyles}
                onValueChange={(e) => setGender(e)}
                items={[
                  { label: 'Male', value: 'male' },
                  { label: 'Female', value: 'female' },
                ]}
              />
            </View>
            <View style={styles.viewWidth}>
              <TextLabel>Blood group</TextLabel>
              <RNPickerSelect
                value={bloodGroup}
                style={pickerSelectStyles}
                onValueChange={(e) => setBloodGroup(e)}
                items={[
                  { label: 'A', value: 'a' },
                  { label: 'B', value: 'b' },
                  { label: 'AB', value: 'ab' },
                  { label: 'O', value: 'o' },
                ]}
              />
            </View>
          </GenoGroup>
          <TextLabel>Date of birth</TextLabel>
          <ProfInputs
            placeholder="0001/01/01"
            placeholderTextColor="#262C3D"
            value={dob}
            textContentType='birthdate'
            keyboardType='default'
            autoCapitalize="none"
            onChangeText={(e) => setDOB(e)}
          />
          <GenoGroup>
            <View style={styles.viewWidth}>
              <TextLabel>Height (cm)</TextLabel>
              <ProfInputs
                placeholder="0.00"
                placeholderTextColor="#262C3D"
                value={height}
                textContentType='none'
                keyboardType='numeric'
                autoCapitalize="none"
                onChangeText={(e) => setHeight(e)}
              />
            </View>
            <View style={styles.viewWidth}>
              <TextLabel>Weight (kg)</TextLabel>
              <ProfInputs
                placeholder="0.00"
                placeholderTextColor="#262C3D"
                value={weight}
                textContentType='none'
                keyboardType='numeric'
                autoCapitalize="none"
                onChangeText={(e) => setWeight(e)}
              />
            </View>
          </GenoGroup>
          <TextLabel>Email</TextLabel>
          <ProfInputs
            placeholder="Enter your email address"
            placeholderTextColor="#262C3D"
            value={email}
            textContentType='emailAddress'
            keyboardType='email-address'
            autoCapitalize="none"
            onChangeText={(e) => setEmail(e)}
          />
          <TextLabel>Phone</TextLabel>
          <ProfInputs
            placeholder="Enter your phone number"
            placeholderTextColor="#262C3D"
            value={number}
            textContentType='telephoneNumber'
            keyboardType='number-pad'
            autoCapitalize="none"
            onChangeText={(e) => setNumber(e)}
          />
          <TextLabel>Address</TextLabel>
          <ProfInputs
            placeholder="Enter your Address"
            placeholderTextColor="#262C3D"
            value={address}
            textContentType='addressCityAndState'
            keyboardType='default'
            autoCapitalize="none"
            onChangeText={(e) => setAddress(e)}
          />
          {/* <TextLabel>Emergency Contact</TextLabel>
          <ProfInputs/>
          <TextLabel>Allergies</TextLabel>
          <ProfInputs/> */}
        </Spacer>
        <LogBtn>Save Changes</LogBtn>
      </ProfileContainer>
    </ProfileOverview>
  );
}
 
export default ProfileEdit;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    // paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#B0B3C7',
    borderRadius: 15,
    fontFamily: theme.fonts.poppinsRegular,
    color: '#262C3D',// to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 16,
    fontFamily: theme.fonts.poppinsRegular,
    // paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#B0B3C7',
    borderRadius: 15,
    color: '#262C3D',// to ensure the text is never behind the icon
  },
});