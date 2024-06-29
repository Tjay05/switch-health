import NoAmbSVG from "@/assets/icons/NoAmbulance";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { AppointmentContainer, AppointmentWrapper, NoAppWrapper } from "../../appointment/components/Appointment.styles";

const Ambulance = () => {
  return (
    <AppointmentWrapper>
      <AppointmentContainer>
        <NoAppWrapper>
          <Spacer position="bottom" size="extraLarge">
            <NoAmbSVG/>
          </Spacer>
          <Spacer position="bottom" size="large">
            <Text variant='place'>No available ambulance right now</Text>
          </Spacer>
        </NoAppWrapper>
      </AppointmentContainer>
    </AppointmentWrapper>
  );
}
 
export default Ambulance;