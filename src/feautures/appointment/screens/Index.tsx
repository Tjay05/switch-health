import NoAppSVG from "@/assets/icons/NoAppointment";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { useCallback, useEffect, useState } from "react";
import { LogBtn } from "../../account/components/account.styles";
import { DateLabel } from "../../home/components/Notification.styles";
import {
  AppDocImg,
  AppDocLocation,
  AppDocName,
  AppointmentBox,
  AppointmentContainer,
  AppointmentInfo,
  AppointmentSection,
  AppointmentWrapper,
  DailyAppointmentContainer,
  DocAppBox,
  NoAppWrapper,
  RateAos,
  RateAosWrap,
} from "../components/Appointment.styles";
import {
  DocAOS,
  RatingText,
  RatingWrap,
} from "../../home/components/Home.styles";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BadGateWay from "@/src/components/NoNetwork";

const AppointmentScreen = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isApiCallFailed, setIsApiCallFailed] = useState(false);

  const getData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("data");
      if (storedData !== null) {
        setUserData(JSON.parse(storedData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const handleGetDetails = async () => {
    if (!userData) return;
    setIsLoading(true);
    setIsApiCallFailed(false);

    try {
      const response = await fetch(
        `https://switch-health.onrender.com/appointment/get`,
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
        setAppointments(data.data);
        setIsApiCallFailed(false);
      } else {
        setIsApiCallFailed(true);
        console.error("Failed to fetch profile data:", response.statusText);
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

  const formatAMPM = (dateString) => {
    const date = new Date(dateString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const groupAppointmentsByDay = (appointments) => {
    return appointments.reduce((acc, appointment) => {
      const date = new Date(appointment.createdAt);
      const day = date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push(appointment);

      return acc;
    }, {});
  };

  const groupedAppointments = groupAppointmentsByDay(appointments);

  const handleRefresh = async () => {
    await handleGetDetails();
  };

  return (
    <>
      {isApiCallFailed && <BadGateWay handleRefresh={handleRefresh}/>}
      {!isApiCallFailed && <AppointmentWrapper showsVerticalScrollIndicator={false}>
        <AppointmentContainer>
          {Object.keys(groupedAppointments).length ? (
            Object.entries(groupedAppointments).map(([day, appointments]) => (
              <AppointmentSection key={day}>
                <Spacer position="top" size="large">
                  <DateLabel>{day}</DateLabel>
                </Spacer>
                {appointments.map((appointment, index) => (
                  <Spacer position="top" size="large" key={index}>
                    <AppointmentBox>
                      <Text variant="place">
                        {formatAMPM(appointment.createdAt)}
                      </Text>
                      <DocAppBox>
                        <AppDocImg
                          source={{ uri: appointment.doctorId.image }}
                        />
                        <AppointmentInfo>
                          <AppDocName>
                            {appointment.doctorId.docName}
                          </AppDocName>
                          <RateAosWrap>
                            <RateAos>{appointment.doctorId.AOS}</RateAos>
                            <RatingWrap>
                              <Ionicons
                                name="star"
                                size={15}
                                color={"#407CE2"}
                              />
                              <Spacer position="left" size="small">
                                <RatingText>
                                  {appointment.doctorId.ratings}
                                </RatingText>
                              </Spacer>
                            </RatingWrap>
                          </RateAosWrap>
                          <AppDocLocation>
                            {appointment.doctorId.distanceAway}
                          </AppDocLocation>
                        </AppointmentInfo>
                      </DocAppBox>
                    </AppointmentBox>
                  </Spacer>
                ))}
              </AppointmentSection>
            ))
          ) : (
            <NoAppWrapper>
              <Spacer position="bottom" size="extraLarge">
                <NoAppSVG />
              </Spacer>
              <Spacer position="bottom" size="large">
                <Text variant="place">You don't have any appointments</Text>
              </Spacer>
              <LogBtn onPress={() => navigation.navigate("Specialist Section")}>
                Book Now
              </LogBtn>
            </NoAppWrapper>
          )}
        </AppointmentContainer>
      </AppointmentWrapper>}
    </>
  );
};

export default AppointmentScreen;
