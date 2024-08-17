import {
  AppContainer,
  TopDoctorsContainer,
  TouchableFlatlist,
} from "../components/Home.styles";
import Loading from "@/src/components/loader";
import { FlatList } from "react-native";
import DoctorCard from "../components/Doctor-info-card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import BadGateWay from "@/src/components/NoNetwork";
import Text from "@/src/components/typograpghy/Text.component";

const TopDoctors = ({ navigation, route }) => {
  const { specialization } = route.params;

  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [isApiCallFailed, setIsApiCallFailed] = useState(false);

  const getData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("data");
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Error retrieving user data", error);
    }
  };

  const handleGetDetails = async () => {
    if (!userData) return;
    setIsLoading(true);
    setIsApiCallFailed(false);

    try {
      const response = await fetch(
        `https://switch-health.onrender.com/mock-doctor/all`,
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
        // Filter doctors based on the passed specialization
        const filteredDoctors = data.data.filter(
          (doctor: any) => doctor.AOS === specialization
        );
        setDoctors(filteredDoctors);
        setIsApiCallFailed(false);
      } else {
        console.error(`API call failed: ${response.status}`);
        setIsApiCallFailed(true);
      }
    } catch (error) {
      console.error("Network or server error", error);
      setIsApiCallFailed(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userData) {
      handleGetDetails();
    }
  }, [userData]);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const handleRefresh = async () => {
    await handleGetDetails();
  };

  return (
    <>
      {isApiCallFailed ? (
        <BadGateWay handleRefresh={handleRefresh} />
      ) : (
        <AppContainer>
          {isLoading && <Loading />}
          {!isLoading && doctors.length === 0 && (
            <Text>No doctors available at the moment</Text>
          )}
          {!isLoading && doctors.length > 0 && (
            <TopDoctorsContainer>
              <FlatList
                data={doctors}
                renderItem={({ item }) => (
                  <TouchableFlatlist
                    onPress={() =>
                      navigation.navigate("Book Appointment", {
                        doctor: item,
                      })
                    }
                  >
                    <DoctorCard doctor={item} />
                  </TouchableFlatlist>
                )}
                keyExtractor={(item) => item.docName}
              />
            </TopDoctorsContainer>
          )}
        </AppContainer>
      )}
    </>
  );
};

export default TopDoctors;
