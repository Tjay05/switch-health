import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
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
  ProfileImg,
  TextLabel,
} from "../components/Profile.styles";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import ProfSVG from "@/assets/icons/ProfileSvg";
import { LogBtn } from "../../account/components/account.styles";
import { theme } from "@/src/infrastructure/theme";

const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDOB] = useState("");
  const [height, setHeight] = useState("0");
  const [weight, setWeight] = useState("0");
  const [gender, setGender] = useState("Male");
  const [bloodGroup, setBloodGroup] = useState("a");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [profileData, setProfileData] = useState(null);

  const getData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("data");
      if (storedData !== null) {
        setUserData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Error retrieving stored data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (userData) {
      handleGetDetails();
    }
  }, [userData]);

  const handleGetDetails = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://switch-health.onrender.com/patient/${userData.data.user._id}/profile`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userData.data.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
        setName(data.fullName || "");
        setEmail(data.email || "");
        setNumber(data.phoneNumber || "");
        setAddress(data.address || "");
        setDOB(data.dateOfBirth || "");
        setHeight(data.height || "0");
        setWeight(data.weight || "0");
        setGender(data.gender || "Male");
        setBloodGroup(data.bloodGroup || "A");
      } else {
        console.error("Failed to fetch profile data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const userData = {
      email,
      datOfBirth:dob,
      height,
      weight,
      address,
      bloodGroup
    };

    try {
      const response = await fetch(
        `https://switch-health.onrender.com/patient/${userData.data.user._id}/profile`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${userData.data.accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        Alert.alert("Profile updated successfully");
      } else {
        console.error(data.message)
      }
    } catch (error) {
      console.log("Error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


     

  return (
    <ProfileOverview contentContainerStyle={styles.contentContainer}>
      <ProfileHead>
        <HeaderText variant="main1">Edit Profile</HeaderText>
        <SetIconWrap>
          <Ionicons name="settings" size={28} color="white" />
        </SetIconWrap>
      </ProfileHead>
      <SvgWrap>
        {userData &&
        userData.data &&
        userData.data.user &&
        userData.data.user.avatar ? (
          <ProfileImg
            source={{ uri: userData.data.user.avatar }}
            style={styles.profileImage}
          />
        ) : (
          <ProfSVG width={100} height={100} />
        )}
      </SvgWrap>
      <ProfileContainer>
        <Spacer position="top" size="XXL">
          <TextLabel>Enter your full Name</TextLabel>
          <ProfInputs
            placeholder={
              profileData
                ? profileData.data.fullName
                : "Enter your date of birth"
            }
            placeholderTextColor="#262C3D"
            value={name}
            editable={false}
            textContentType="name"
            keyboardType="default"
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
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
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
                  { label: "A", value: "a" },
                  { label: "B", value: "b" },
                  { label: "AB", value: "ab" },
                  { label: "O", value: "o" },
                ]}
              />
            </View>
          </GenoGroup>
          <TextLabel>Date of birth</TextLabel>
          <ProfInputs
            placeholder={
              profileData
                ? profileData.data.dateOfBirth
                : "Enter your date of birth"
            }
            placeholderTextColor="#262C3D"
            value={dob}
            textContentType="birthdate"
            keyboardType="default"
            autoCapitalize="none"
            onChangeText={(e) => setDOB(e)}
          />
          <GenoGroup>
            <View style={styles.viewWidth}>
              <TextLabel>Height (cm)</TextLabel>
              <ProfInputs
                placeholder={
                  profileData ? profileData.data.height : "Enter your Height"
                }
                placeholderTextColor="#262C3D"
                value={height}
                textContentType="none"
                keyboardType="numeric"
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
                textContentType="none"
                keyboardType="numeric"
                autoCapitalize="none"
                onChangeText={(e) => setWeight(e)}
              />
            </View>
          </GenoGroup>
          <TextLabel>Email</TextLabel>
          <ProfInputs
            placeholder={
              profileData ? profileData.data.email : "Enter your email address"
            }
            placeholderTextColor="#262C3D"
            value={email}
            editable={false}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(e) => setEmail(e)}
          />
          <TextLabel>Phone</TextLabel>
          <ProfInputs
            placeholder={
              profileData ? profileData.data.phone : "Enter your Phone Number"
            }
            placeholderTextColor="#262C3D"
            value={number}
            editable={false}
            textContentType="telephoneNumber"
            keyboardType="number-pad"
            autoCapitalize="none"
            onChangeText={(e) => setNumber(e)}
          />
          <TextLabel>Address</TextLabel>
          <ProfInputs
            placeholder={
              profileData ? profileData.data.address : "Enter your Address"
            }
            placeholderTextColor="#262C3D"
            value={address}
            textContentType="addressCityAndState"
            keyboardType="default"
            autoCapitalize="none"
            onChangeText={(e) => setAddress(e)}
          />
        </Spacer>
        <LogBtn>Save Changes</LogBtn>
      </ProfileContainer>
    </ProfileOverview>
  );
};

export default ProfileEdit;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#B0B3C7",
    borderRadius: 15,
    fontFamily: theme.fonts.poppinsRegular,
    color: "#262C3D",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#B0B3C7",
    borderRadius: 15,
    fontFamily: theme.fonts.poppinsRegular,
    color: "#262C3D",
  },
});
