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

const DOCTORS = [
  // {
  //   image:
  //     "https://res.cloudinary.com/dba1aezsn/image/upload/v1720109367/Heng_asavarid_i7ypbf.jpg",
  //   docName: "Dr. Alfa",
  //   AOS: "Gynaecologist",
  //   ratings: "3.7",
  //   distanceAway: "800m away",
  // },
];

const TopDoctors = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [isApiCallFailed, setIsApiCallFailed] = useState(false);

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
        setDoctors(data.data);
        setIsApiCallFailed(false);
      } else {
        setIsApiCallFailed(true);
      }
    } catch (error) {
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
      {isApiCallFailed && <BadGateWay handleRefresh={handleRefresh}/>}
      {!isApiCallFailed && <AppContainer>
        {isLoading && <Loading />}
        <TopDoctorsContainer>
          <FlatList
            data={doctors.length ? doctors : DOCTORS}
            renderItem={({ item }) => {
              return (
                <TouchableFlatlist
                  onPress={() =>
                    navigation.navigate("Book Appointment", {
                      doctor: item,
                    })
                  }
                >
                  <DoctorCard doctor={item} />
                </TouchableFlatlist>
              );
            }}
            keyExtractor={(item) => item.docName}
          />
        </TopDoctorsContainer>
      </AppContainer>}
    </>
  );
};

export default TopDoctors;
