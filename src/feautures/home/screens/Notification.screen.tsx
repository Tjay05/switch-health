import NoNotSVG from "@/assets/icons/NoNotification";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { 
  AppointmentContainer, 
  AppointmentWrapper,
  NoAppWrapper
} from "../../appointment/components/Appointment.styles";

const NotificationScreen = () => {
  return (
    <>
      <AppointmentWrapper>
        <AppointmentContainer>
          <NoAppWrapper>
            <Spacer position="bottom" size="extraLarge">
              <NoNotSVG/>
            </Spacer>
            <Spacer position="bottom" size="large">
              <Text variant='place'>All your notifications will appear here</Text>
            </Spacer>
          </NoAppWrapper>
        </AppointmentContainer>
      </AppointmentWrapper>
    </>
  );
}
 
export default NotificationScreen;