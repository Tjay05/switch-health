import SuccSVG from "@/assets/icons/SuccSVG";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { LogBtn } from "../../account/components/account.styles";
import { AppointmentContainer, AppointmentWrapper, NoAppWrapper } from "../../appointment/components/Appointment.styles";

const SuccessfulPage = ({ navigation }) => {
  return (
    <AppointmentWrapper>
      <AppointmentContainer>
        <NoAppWrapper>
          <Spacer position="bottom" size="extraLarge">
            <SuccSVG/>
          </Spacer>
          <Spacer position="bottom" size="large">
            <Text variant='place'>Congratulations! Your appointment has been successfully booked</Text>
          </Spacer>
          <LogBtn onPress={() => navigation.navigate('HomeMain')}>Continue</LogBtn>
        </NoAppWrapper>
      </AppointmentContainer>
    </AppointmentWrapper>
  );
}
 
export default SuccessfulPage;