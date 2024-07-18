import { useEffect, useState } from "react";
import { Alert, StyleSheet, View, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import * as ImagePicker from "expo-image-picker";

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
  CenteredText,
  AddPicIcon,
} from "../components/Profile.styles";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import ProfSVG from "@/assets/icons/ProfileSvg";
import { LogBtn } from "../../account/components/account.styles";
import { theme } from "@/src/infrastructure/theme";
import Loading from "@/src/components/loader";

const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDOB] = useState(new Date());
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [image, setImage] = useState(null);
  const [profileimage, setProfileImage] = useState(null);
  const [error, setError] = useState("");
  const [isLoader, setIsLoader] = useState(true);

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

  // IMAGE SELECTION

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      await uploadImage(result.assets[0].uri);
      await handleGetDetails();
    }
  };

  const uploadImage = async (img) => {
    if (!img) return;

    let formData = new FormData();
    formData.append("image", {
      uri: img,
      name: "profile.jpg",
      type: "image/jpeg",
    });

    try {
      const response = await fetch(
        "https://switch-health.onrender.com/patient/profile-picture",
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userData.data.accessToken}`,
          },
        }
      );

      setIsLoading(true);
      const data = await response.json();
      if (response.ok) {
        setIsLoading(false);
        handleGetDetails();
      } else {
        Alert.alert("Profile not updated");
        console.error("Failed to upload image", data);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    if (userData) {
      setIsLoading(true);
      handleGetDetails();
    }
  }, [userData]);

  const handleGetDetails = async () => {
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
        setName(data.data.fullName || "");
        setEmail(data.data.email || "");
        setNumber(data.data.phone || "");
        setAddress(data.data.address || "");
        setDOB(new Date(data.data.dateOfBirth) || "");
        setHeight(data.data.height.toString() || "");
        setWeight(data.data.weight.toString() || "");
        setGender(data.data.gender || "Select a gender");
        setBloodGroup(data.data.bloodType || "A");
        setProfileImage(data.data.avatar || "A");
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
    const newProfileData = {
      fullName: name,
      email,
      dateOfBirth: dob.toISOString(),
      height,
      weight,
      address,
      gender,
      phone: number,
      bloodType: bloodGroup,
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
          body: JSON.stringify(newProfileData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setIsLoading(false);
        Alert.alert("Success", "Profile updated successfully");
        await handleGetDetails();
      } else {
        const errorData = await response.json();
        setIsLoading(false);
        Alert.alert("Error", errorData.message);
      }
    } catch (error) {
      console.log("Error:", error);
      setIsLoading(false);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(Platform.OS === "ios");
    setDOB(currentDate);
  };

  return (
    <View style={{ flex: 1 }}>
      <ProfileOverview contentContainerStyle={styles.contentContainer}>
        <ProfileHead>
          <HeaderText variant="main1">Edit Profile</HeaderText>
          <SetIconWrap>
            <Ionicons name="settings" size={28} color="white" />
          </SetIconWrap>
        </ProfileHead>
        <SvgWrap onPress={pickImage}>
          {image ? (
            <ProfileImg source={{ uri: image }} style={styles.profileImage} />
          ) : profileimage ? (
            <ProfileImg
              source={{ uri: profileimage }}
              style={styles.profileImage}
            />
          ) : (
            <ProfSVG width={100} height={100} />
          )}
          <AddPicIcon>
            <Ionicons name="camera-outline" size={28} color="#1A1F71" />
          </AddPicIcon>
        </SvgWrap>
        <ProfileContainer>
          <Spacer position="top" size="XXL">
            <TextLabel>Enter your full Name</TextLabel>
            <ProfInputs
              placeholderTextColor="#262C3D"
              value={name}
              textContentType="name"
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={(e) => setName(e)}
            />
            {isLoading && <Loading />}
            <GenoGroup>
              <View style={styles.viewWidth}>
                <TextLabel>Gender</TextLabel>
                <RNPickerSelect
                  value={gender}
                  style={pickerSelectStyles}
                  onValueChange={(e) => setGender(e)}
                  items={[
                    { label: "Male", value: "MALE" },
                    { label: "Female", value: "FEMALE" },
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
            {/* <EvilIcons name="calendar" size={25} color="#757575" /> */}
            <ProfInputs
              placeholderTextColor="#262C3D"
              value={moment(dob).format("YYYY-MM-DD")}
              textContentType="birthdate"
              keyboardType="default"
              autoCapitalize="none"
              onFocus={() => setShowDatePicker(true)}
              showSoftInputOnFocus={false}
            />
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dob}
                mode="date"
                display="default"
                onChange={onChange}
              />
            )}
            <GenoGroup>
              <View style={styles.viewWidth}>
                <TextLabel>Height (cm)</TextLabel>
                <ProfInputs
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
              placeholderTextColor="#262C3D"
              value={number}
              textContentType="telephoneNumber"
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={(e) => setNumber(e)}
            />
            <TextLabel>Address</TextLabel>
            <ProfInputs
              placeholderTextColor="#262C3D"
              value={address}
              textContentType="addressCityAndState"
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={(e) => setAddress(e)}
            />
          </Spacer>
          {error && (
            <Spacer position="top" size="extraLarge">
              <CenteredText variant="error">{error}</CenteredText>
            </Spacer>
          )}
          <LogBtn onPress={handleSubmit}>
            {isLoading ? "Saving Changes..." : "Save Changes"}
          </LogBtn>
        </ProfileContainer>
      </ProfileOverview>
    </View>
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
    fontFamily: theme.fonts.poppinsRegular,
    borderWidth: 1,
    borderColor: "#B0B3C7",
    borderRadius: 15,
    color: "#262C3D",
  },
});
