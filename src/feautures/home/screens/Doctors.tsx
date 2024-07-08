import {
  AppContainer,
  TopDoctorsContainer,
  TouchableFlatlist,
} from "../components/Home.styles";
import Loading from "@/src/components/loader";

import DocPIc from "../../../../assets/images/femaleDoc.png";
import DocPIc2 from "../../../../assets/images/doctor.png";
import { FlatList } from "react-native";
import DoctorCard from "../components/Doctor-info-card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

const DOCTORS = [
  {
    image:
      "https://res.cloudinary.com/dba1aezsn/image/upload/v1720109367/Heng_asavarid_i7ypbf.jpg",
    docName: "Dr. Alfa",
    AOS: "Gynaecologist",
    ratings: "3.7",
    distanceAway: "800m away",
  },
];

const TopDoctors = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);

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
      } else {
        console.error("Failed to fetch profile data:", response.statusText);
      }
    } catch (error) {
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
  return (
    <AppContainer>
      {isLoading && <Loading />}
      <TopDoctorsContainer>
        <FlatList
          data={doctors.length ? doctors : DOCTORS}
          renderItem={({ item }) => {
            return (
              <TouchableFlatlist
                onPress={() =>
                  navigation.navigate("DoctorAppointment", {
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
    </AppContainer>
  );
};

export default TopDoctors;
