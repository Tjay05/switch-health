import { useState } from "react";
import { Alert, StyleSheet, View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { LogBtn } from "../../account/components/account.styles";
import { ProfInputs, TextLabel } from "../../profile/components/Profile.styles";
import { BookAppWrap, BookBtnWrap } from "../components/DocsNear.styles";
import DoctorCard from "../components/Doctor-info-card";
import { AppContainer } from "../components/Home.styles";
import Spacer from "@/src/components/spacer/Spacer.component";

const BookAppointment = ({ route, navigation }) => {
  const { doctor } = route.params;
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <BookAppWrap>
      <AppContainer>
        <DoctorCard doctor={doctor}/>
        <Spacer position="top" size="XXL">  
          <TextLabel>Select Date</TextLabel>
          <ProfInputs
            placeholderTextColor="#262C3D"
            value={moment(date).format("YYYY-MM-DD")}
            textContentType='birthdate'
            keyboardType="default"
            autoCapitalize="none"
            onFocus={() => setShowDatePicker(true)}
            showSoftInputOnFocus={false}
          />
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
          <TextLabel>Enter Schedule Time</TextLabel>
          <ProfInputs
            placeholder="0.00"
            placeholderTextColor="#262C3D"
            value={time}
            textContentType="none"
            keyboardType="numeric"
            autoCapitalize="none"
            onChangeText={(e) => setTime(e)}
          />
          <BookBtnWrap onPress={() => navigation.navigate('Success')}>
            <LogBtn>Submit</LogBtn>
          </BookBtnWrap>
        </Spacer>
      </AppContainer>
    </BookAppWrap>
  );
}
 
export default BookAppointment;