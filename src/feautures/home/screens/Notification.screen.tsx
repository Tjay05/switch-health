import NoNotSVG from "@/assets/icons/NoNotification";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { useState } from "react";
import { 
  NoAppWrapper
} from "../../appointment/components/Appointment.styles";
import { 
  DateLabel, 
  NotContainer, 
  NotificationBox, 
  NotificationHeader, 
  NotificationSection, 
  NotificationText, 
  NotText, 
  NotWrapper, 
  TimeLabel 
} from "../components/Notification.styles";
import { Ionicons } from "@expo/vector-icons";

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([]);

  return (
    <>
      <NotContainer showsVerticalScrollIndicator={false}>
        <NotWrapper>
          {!notifications.length ? (
            <NotificationSection>
              <Spacer position="top" size="large">
                <DateLabel>June 2024</DateLabel>
              </Spacer>
              <Spacer position="top" size="large">
                <NotificationHeader>
                  <NotText variant='label'>Reminder</NotText>
                  <TimeLabel>Today at 5:12am</TimeLabel>
                </NotificationHeader>
                <Spacer position="top" size="large">
                  <NotificationBox>
                    <Ionicons name="notifications" size={28} color="#263A5C" />
                    <NotificationText>Your appointment with Dr. Angel is tomorrow at 2:00 PM</NotificationText>
                  </NotificationBox>
                </Spacer>
              </Spacer>
              <Spacer position="top" size="large">
                <NotificationHeader>
                  <TimeLabel>Today at 4:00am</TimeLabel>
                </NotificationHeader>
                <Spacer position="top" size="large">
                  <NotificationBox>
                    <Ionicons name="notifications" size={28} color="#263A5C" />
                    <NotificationText>Your appointment with Dr. Angel is tomorrow at 2:00 PM</NotificationText>
                  </NotificationBox>
                </Spacer>
              </Spacer>
              <Spacer position="top" size="extraLarge">
                <DateLabel>May 2024</DateLabel>
              </Spacer>
              <Spacer position="top" size="large">
                <NotificationHeader>
                  <NotText variant='label'>Welcome</NotText>
                  <TimeLabel>11/05/24</TimeLabel>
                </NotificationHeader>
                <NotificationBox>
                  <Ionicons name="notifications" size={28} color="#263A5C" />
                  <NotificationText>Welcome to switch Health, Tosin Poppins we are thrilled to have you.</NotificationText>
                </NotificationBox>
              </Spacer>
            </NotificationSection>
          ) : (
            <NoAppWrapper>
              <Spacer position="top" size="XXL">
                <Spacer position="bottom" size="extraLarge">
                  <NoNotSVG/>
                </Spacer>
                <Spacer position="bottom" size="large">
                  <Text variant='place'>All your notifications will appear here</Text>
                </Spacer>
              </Spacer>
            </NoAppWrapper>
          )}
        </NotWrapper>
      </NotContainer>
    </>
  );
}
 
export default NotificationScreen;