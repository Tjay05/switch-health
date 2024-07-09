import NoAppSVG from "@/assets/icons/NoAppointment";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { useState } from "react";
import { LogBtn } from "../../account/components/account.styles";
import { DateLabel } from "../../home/components/Notification.styles";
import { AppDocImg, AppDocLocation, AppDocName, AppointmentBox, AppointmentContainer, AppointmentInfo, AppointmentSection, AppointmentWrapper, DailyAppointmentContainer, DocAppBox, NoAppWrapper, RateAos, RateAosWrap } from "../components/Appointment.styles";

import DocPIc from "../../../../assets/images/femaleDoc.png";
import { DocAOS, RatingText, RatingWrap } from "../../home/components/Home.styles";
import { Ionicons } from "@expo/vector-icons";

const AppointmentScreen = ({ navigation }) => {
  const [appointments, setAppointments] = useState(['']);

  return (
    <>
      <AppointmentWrapper showsVerticalScrollIndicator={false}>
        <AppointmentContainer>
          { appointments.length ? (
            <AppointmentSection>
              <DailyAppointmentContainer>
                <Spacer position="top" size="large">
                  <DateLabel>Today</DateLabel>
                </Spacer>
                <Spacer position="top" size="large">
                  <AppointmentBox>
                    <Text variant='place'>10:00am</Text>
                    <DocAppBox>
                      <AppDocImg source={DocPIc} />
                      <AppointmentInfo>
                        <AppDocName>Dr Margeret</AppDocName>
                        <RateAosWrap>
                          <RateAos>Peditrician</RateAos>
                          <RatingWrap>
                            <Ionicons name="star" size={15} color={'#407CE2'} />
                            <Spacer position='left' size='small'>
                              <RatingText>4.7</RatingText>
                            </Spacer>
                          </RatingWrap>
                        </RateAosWrap>
                        <AppDocLocation>Switch Specialist Hospital maitama, Abuja</AppDocLocation>
                      </AppointmentInfo>
                    </DocAppBox>
                  </AppointmentBox>
                </Spacer>
              </DailyAppointmentContainer>
              <DailyAppointmentContainer>
                <Spacer position="top" size="large">
                  <DateLabel>27th June 2024</DateLabel>
                </Spacer>
                <Spacer position="top" size="large">
                  <AppointmentBox>
                    <Text variant='place'>1:00am</Text>
                    <DocAppBox>
                      <AppDocImg source={DocPIc} />
                      <AppointmentInfo>
                        <AppDocName>Dr Margeret</AppDocName>
                        <RateAosWrap>
                          <RateAos>Peditrician</RateAos>
                          <RatingWrap>
                            <Ionicons name="star" size={15} color={'#407CE2'} />
                            <Spacer position='left' size='small'>
                              <RatingText>4.7</RatingText>
                            </Spacer>
                          </RatingWrap>
                        </RateAosWrap>
                        <AppDocLocation>Switch Specialist Hospital maitama, Abuja</AppDocLocation>
                      </AppointmentInfo>
                    </DocAppBox>
                  </AppointmentBox>
                </Spacer>
              </DailyAppointmentContainer>
            </AppointmentSection>
          ) : (
            <NoAppWrapper>
              <Spacer position="bottom" size="extraLarge">
                <NoAppSVG/>
              </Spacer>
              <Spacer position="bottom" size="large">
                <Text variant='place'>You don't have any appointments</Text>
              </Spacer>
              <LogBtn onPress={() => navigation.navigate('Top Doctors')}>Book Now</LogBtn>
            </NoAppWrapper>
          ) }
        </AppointmentContainer>
      </AppointmentWrapper>
    </>
  );
}
 
export default AppointmentScreen;