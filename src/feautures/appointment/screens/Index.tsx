import NoAppSVG from "@/assets/icons/NoAppointment";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { LogBtn } from "../../account/components/account.styles";
import { AppointmentContainer, AppointmentWrapper, NoAppWrapper } from "../components/Appointment.styles";

const AppointmentScreen = ({ navigation }) => {
  return (
    <>
      <AppointmentWrapper>
        <AppointmentContainer>
          <NoAppWrapper>
            <Spacer position="bottom" size="extraLarge">
              <NoAppSVG/>
            </Spacer>
            <Spacer position="bottom" size="large">
              <Text variant='place'>You don't have any appointments</Text>
            </Spacer>
            <LogBtn onPress={() => navigation.navigate('Top Doctors')}>Book Now</LogBtn>
          </NoAppWrapper>
        </AppointmentContainer>
      </AppointmentWrapper>
    </>
  );
}
 
export default AppointmentScreen;