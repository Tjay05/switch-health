import React, { useEffect, useState, useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  HeaderText,
  MenuIcon,
  MenuItems,
  MenuText,
  ProfileContainer,
  ProfileHead,
  ProfileMenu,
  ProfileOverview,
  Profstyles as styles,
  SetIconWrap,
  StatsBox,
  StatsContainer,
  SvgWrap,
  TouchMenu,
  ProfileImg,
} from "../components/Profile.styles";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import ProfSVG from "@/assets/icons/ProfileSvg";
import { CommonActions, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Button, Modal, StyleSheet, View } from "react-native";

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [weight, setWeight] = useState(" ");
  const [stepCount, setStepCount] = useState(0);
  const [caloriesBurnt, setCaloriesBurnt] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const loadStepCount = async () => {
    try {
      const storedStepCount = await AsyncStorage.getItem("stepCount");
      const storedCalorieBurnt = await AsyncStorage.getItem("caloriesBurnt");
      if (storedStepCount !== null) {
        setStepCount(JSON.parse(storedStepCount));
      }
      if (storedCalorieBurnt !== null) {
        setCaloriesBurnt(JSON.parse(storedCalorieBurnt));
      }
    } catch (error) {
      console.error("Error loading step count or calories burnt:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadStepCount();
    }, [])
  );


  const getData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("data");
      if (storedData !== null) {
        setUserData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const kgToLbs = (kg) => kg * 2.20462;
  const handleGetDetails = async () => {
    if (!userData) return;
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
        setUserData(data);
        setWeight(kgToLbs(data.data.weight).toFixed(2).toString());
      } else {
        console.error("Failed to fetch profile data:", response.statusText);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  useEffect(() => {
    if (userData) {
      handleGetDetails();
    }
  }, [userData]);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('data');
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { 
            name: 'AccountNavigator',
            params: { screen: 'Login', }
          }
        ],
      })
    );
  };

  return (
    <ProfileOverview contentContainerStyle={styles.contentContainer}>
      <ProfileHead>
        <HeaderText variant="main1">Profile Overview</HeaderText>
        <SetIconWrap onPress={() => navigation.navigate("Settings")}>
          <Ionicons name="settings" size={28} color="white" />
        </SetIconWrap>
      </ProfileHead>
      <SvgWrap>
        {userData && userData.data && userData.data.avatar ? (
          <ProfileImg
            source={{ uri: userData.data.avatar }}
            style={styles.profileImage}
          />
        ) : (
          <ProfSVG width={100} height={100} />
        )}
      </SvgWrap>
      <ProfileContainer>
        <Spacer position="top" size="extraLarge">
          <StatsContainer>
            <StatsBox>
              <Ionicons name="footsteps" size={34} color="#407BFF" />
              <Text variant="body">Steps</Text>
              <Text variant="main1">{stepCount}</Text>
            </StatsBox>
            <StatsBox>
              <Ionicons name="flame" size={34} color="#407BFF" />
              <Text variant="body">Calories</Text>
              <Text variant="main1">{caloriesBurnt.toFixed(2)} cal</Text>
            </StatsBox>
            <StatsBox>
              <Ionicons name="scale" size={34} color="#407BFF" />
              <Text variant="body">Weight</Text>
              <Text variant="main1">{weight} lbs</Text>
            </StatsBox>
          </StatsContainer>
        </Spacer>
        <Spacer position="top" size="large" />
        <ProfileMenu>
          <TouchMenu onPress={() => navigation.navigate("Saved articles")}>
            <MenuItems>
              <MenuIcon>
                <Ionicons name="heart-outline" size={24} color="#1E90FF" />
              </MenuIcon>
              <MenuText variant="place">My Saved Articles</MenuText>
            </MenuItems>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color="#221F1F99"
            />
          </TouchMenu>
          <TouchMenu onPress={() => navigation.navigate("Appointments")}>
            <MenuItems>
              <MenuIcon>
                <Ionicons name="calendar-outline" size={24} color="#1E90FF" />
              </MenuIcon>
              <MenuText variant="place">Appointments</MenuText>
            </MenuItems>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color="#221F1F99"
            />
          </TouchMenu>
          <TouchMenu
            onPress={() => Alert.alert("You can not add card now use paystack")}
          >
            <MenuItems>
              <MenuIcon>
                <Ionicons name="card-outline" size={24} color="#1E90FF" />
              </MenuIcon>
              <MenuText variant="place">Payment Method</MenuText>
            </MenuItems>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color="#221F1F99"
            />
          </TouchMenu>
          <TouchMenu onPress={() => navigation.navigate("ProfileEdit")}>
            <MenuItems>
              <MenuIcon>
                <Ionicons name="create-outline" size={24} color="#1E90FF" />
              </MenuIcon>
              <MenuText variant="place">Edit Profile</MenuText>
            </MenuItems>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color="#221F1F99"
            />
          </TouchMenu>
          <TouchMenu onPress={() => navigation.navigate("Notifications")}>
            <MenuItems>
              <MenuIcon>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="#1E90FF"
                />
              </MenuIcon>
              <MenuText variant="place">Notifications</MenuText>
            </MenuItems>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color="#221F1F99"
            />
          </TouchMenu>
          <TouchMenu onPress={() => setModalVisible(true)}>
            <MenuItems>
              <MenuIcon>
                <Ionicons name="exit-outline" size={24} color="#1E90FF" />
              </MenuIcon>
              <MenuText variant="place">Logout</MenuText>
            </MenuItems>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color="#221F1F99"
            />
          </TouchMenu>

          <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styls.modalBackground}>
              <View style={styls.modalContainer}>
                <Text>Are you sure you want to logout?</Text>
                <View style={styls.buttonContainer}>
                  <Button title="Cancel" onPress={() => setModalVisible(false)} />
                  <Button title="Log Out" onPress={handleLogout} />
                </View>
              </View>
            </View>
          </Modal>

        </ProfileMenu>
      </ProfileContainer>
    </ProfileOverview>
  );
};

const styls = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }, 
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  }, 
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default ProfileScreen;
