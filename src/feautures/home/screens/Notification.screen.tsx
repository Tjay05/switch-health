import NoNotSVG from "@/assets/icons/NoNotification";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { 
  NoAppWrapper
} from "../../appointment/components/Appointment.styles";
import { NotContainer, NotWrapper } from "../components/Notification.styles";

const NotificationScreen = () => {
  return (
    <>
      <NotContainer>
        <NotWrapper>
          <NoAppWrapper>
            <Spacer position="bottom" size="extraLarge">
              <NoNotSVG/>
            </Spacer>
            <Spacer position="bottom" size="large">
              <Text variant='place'>All your notifications will appear here</Text>
            </Spacer>
          </NoAppWrapper>
        </NotWrapper>
      </NotContainer>
    </>
  );
}
 
export default NotificationScreen;