import { useCallback, useState } from "react";
import {
  Alert,
  Platform,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { LogBtn } from "../../account/components/account.styles";
import { ProfInputs, TextLabel } from "../../profile/components/Profile.styles";
import { BookAppWrap, BookBtnWrap } from "../components/DocsNear.styles";
import DoctorCard from "../components/Doctor-info-card";
import { AppContainer } from "../components/Home.styles";
import Spacer from "@/src/components/spacer/Spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import BadGateWay from "@/src/components/NoNetwork";
import Loading from "@/src/components/loader";

const BookAppointment = ({ route, navigation }) => {
  const { doctor } = route.params;
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [userData, setUserData] = useState(null);
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

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
    setAppointmentDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentDate = selectedTime || date;
    setShowTimePicker(Platform.OS === "ios");
    const newDate = new Date(appointmentDate);
    newDate.setHours(currentDate.getHours());
    newDate.setMinutes(currentDate.getMinutes());
    setAppointmentDate(newDate);
  };

  const scheduleAppointment = async () => {
    const appointment = {
      doctorId: doctor._id,
      appointmentDate,
    };
    setIsApiCallFailed(false);
    setIsLoading(false);

    try {
      const response = await fetch(
        `https://switch-health.onrender.com/appointment/create-appointment`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${userData.data.accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointment),
        }
      );

      if (response.ok) {
        const data = await response.json();
        Alert.alert("booked an appoint ment successfully");
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

  const handleRefresh = async () => {
    await scheduleAppointment();
  };

  return (
    <>
      {isApiCallFailed && <BadGateWay handleRefresh={handleRefresh}/>}
      {isLoading && <Loading/>}
      {!isApiCallFailed && <BookAppWrap>
        <AppContainer>
          <DoctorCard doctor={doctor} />
          <Spacer position="top" size="XXL">
            <TextLabel>Select Date</TextLabel>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <ProfInputs
                placeholderTextColor="#262C3D"
                value={moment(appointmentDate).format("YYYY-MM-DD")}
                textContentType="none"
                keyboardType="default"
                autoCapitalize="none"
                editable={false}
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            )}

            <TextLabel>Select Time</TextLabel>
            <TouchableOpacity onPress={() => setShowTimePicker(true)}>
              <ProfInputs
                placeholderTextColor="#262C3D"
                value={moment(appointmentDate).format("HH:mm")}
                textContentType="none"
                keyboardType="default"
                autoCapitalize="none"
                editable={false}
              />
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker
                testID="timePicker"
                value={date}
                mode="time"
                display="default"
                onChange={onChangeTime}
              />
            )}

            <BookBtnWrap onPress={scheduleAppointment}>
              <LogBtn>Submit</LogBtn>
            </BookBtnWrap>
          </Spacer>
        </AppContainer>
      </BookAppWrap>}
    </>
  );
};

export default BookAppointment;
