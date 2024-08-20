import { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CardiologySvg from "@/assets/icons/CardioSVG";
import DentistSvg from "@/assets/icons/DentistrySVG";
import DermatologySvg from "@/assets/icons/DermaSVG";
import ENTSvg from "@/assets/icons/EntSVG";
import GastrologySvg from "@/assets/icons/GastroSVG";
import GeneralSvg from "@/assets/icons/GenSVG";
import NephrologySvg from "@/assets/icons/NephroSVG";
import NeurologySvg from "@/assets/icons/NeuroSVG";
import ObstetSvg from "@/assets/icons/ObstetSVG";
import OncologySvg from "@/assets/icons/OncoloSVG";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { SpecialistBox, SpecialistContainer, SpecialistGroup, SpecialistScroll, SpecialistType, TextCaption } from "../components/DocsNear.styles";
import { SearchInput, TopDoctorsContainer, TouchableFlatlist } from "../components/Home.styles";
import { useFocusEffect } from "@react-navigation/native";
import Loading from "@/src/components/loader";
import BadGateWay from "@/src/components/NoNetwork";
import DoctorCard from "../components/Doctor-info-card";

const SpecialistsScreen = ({ navigation }: { navigation: any }) => {
  const [userData, setUserData] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
        setDoctors(data.data);
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

  const handleSpecialistSelect = (specialization: any) => {
    navigation.navigate('Top Doctors', { specialization });
  };

  const filteredDoctors = doctors.filter((doctor) => {
    if (!doctor.docName) return false;
    const name = doctor.docName.toLowerCase();

    const normalQuery = searchQuery.toLowerCase().trim();

    return name.includes(normalQuery.toLowerCase());
  }
  );

  return (
    <>
      {isLoading && <Loading/>}
      {isApiCallFailed ? (
        <BadGateWay handleRefresh={handleRefresh} />
      ) : (
        <SpecialistContainer>
          <SpecialistScroll showsVerticalScrollIndicator={false}>
            <SearchInput
              placeholder="Search doctor by name or location"
              placeholderTextColor={"#221F1F99"}
              iconColor={"#221F1F99"}
              value={searchQuery}
              onChangeText={(e) => {
                setSearchQuery(e);

                if (e.trim() === '') {
                  setIsSearchActive(false);
                } else {
                  setIsSearchActive(true);
                }
              }}
              onFocus={() => setIsSearchActive(true)}
              onBlur={() => {
                if (searchQuery.trim() === '') {
                  setIsSearchActive(false);
                }
              }}
              style={styles.searchBar}
              inputStyle={styles.input}
            />
            {!isSearchActive ? (
              <View>
                <Spacer position="top" size="small">
                  <Text variant='main2'>Select a medical specialization</Text>
                  <TextCaption>You'll be taken to a list of specialists according to your selection</TextCaption>
                </Spacer>
                <SpecialistGroup>
                  <SpecialistBox onPress={() => handleSpecialistSelect('Cardiology')}>
                    <CardiologySvg/>
                    <SpecialistType>Cardiology</SpecialistType>
                  </SpecialistBox>
                  <SpecialistBox onPress={() => handleSpecialistSelect('Dermatologist')}>
                    <DermatologySvg/>
                    <SpecialistType>Dermatology</SpecialistType>
                  </SpecialistBox>
                  <SpecialistBox onPress={() => handleSpecialistSelect('Consultant')}>
                    <ENTSvg/>
                    <SpecialistType>Consultant</SpecialistType>
                  </SpecialistBox>
                  <SpecialistBox onPress={() => handleSpecialistSelect('Gastroenterologist')}>
                    <GastrologySvg/>
                    <SpecialistType>Gastroenterology</SpecialistType>
                  </SpecialistBox>
                  <SpecialistBox onPress={() => handleSpecialistSelect('Dentist')}>
                    <DentistSvg/>
                    <SpecialistType>Dentistry</SpecialistType>
                  </SpecialistBox>
                  <SpecialistBox onPress={() => handleSpecialistSelect('General Doctor')}>
                    <GeneralSvg/>
                    <SpecialistType>General Practitioner</SpecialistType>
                  </SpecialistBox>
                  <SpecialistBox onPress={() => handleSpecialistSelect('Nephrologist')}>
                    <NephrologySvg/>
                    <SpecialistType>Nephrology</SpecialistType>
                  </SpecialistBox>
                  <SpecialistBox onPress={() => handleSpecialistSelect('Neurologist')}>
                    <NeurologySvg/>
                    <SpecialistType>Neurology</SpecialistType>
                  </SpecialistBox>
                  <SpecialistBox onPress={() => handleSpecialistSelect('Gynecologist')}>
                    <ObstetSvg/>
                    <SpecialistType>Obstetrics & Gynecology</SpecialistType>
                  </SpecialistBox>
                  <SpecialistBox onPress={() => handleSpecialistSelect('Oncologist')}>
                    <OncologySvg/>
                    <SpecialistType>Oncology</SpecialistType>
                  </SpecialistBox>
                </SpecialistGroup>
              </View>
            ) : (
              <View>
                <Spacer position="top" size="large">
                  <Text variant='main2'>List of Available Specialists</Text>
                </Spacer>
                <TopDoctorsContainer>
                  {filteredDoctors.map((item) => (
                    <TouchableFlatlist
                      key={item.docName}
                      onPress={() => 
                        navigation.navigate('Book Appointment', {
                          doctor: item,
                        })
                      }
                    >
                      <DoctorCard doctor={item} />
                    </TouchableFlatlist>
                  ))}
                </TopDoctorsContainer>
              </View>
            )}
          </SpecialistScroll>
        </SpecialistContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
  }, 
  input: {
    top: -5,
    fontSize: 15,
  }
})
 
export default SpecialistsScreen;