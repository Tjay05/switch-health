import NoNotSVG from "@/assets/icons/NoNotification";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { useCallback, useEffect, useState } from "react";
import { NoAppWrapper } from "../../appointment/components/Appointment.styles";
import {
  DateLabel,
  NotContainer,
  NotificationBox,
  NotificationHeader,
  NotificationSection,
  NotificationText,
  NotText,
  NotWrapper,
  TimeLabel,
} from "../components/Notification.styles";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const getData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("data");
      if (storedData !== null) {
        setUserData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userData) {
      setIsLoading(true);
      handleGetDetails();
    }
  }, [userData]);

  const handleGetDetails = async () => {
    try {
      const response = await fetch(
        `https://switch-health.onrender.com/notification/get`,
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
        setNotifications(data.data);
      } else {
        console.error("Failed to fetch profile data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatAMPM = (dateString) => {
    const date = new Date(dateString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  const groupNotificationsByMonth = (notifications) => {
    return notifications.reduce((acc, notification) => {
      const date = new Date(notification.createdAt);
      const monthYear = date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
      });

      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(notification);

      return acc;
    }, {});
  };

  const groupedNotifications = groupNotificationsByMonth(notifications);

  return (
    <NotContainer showsVerticalScrollIndicator={false}>
      <NotWrapper>
        {Object.keys(groupedNotifications).length ? (
          Object.entries(groupedNotifications).map(
            ([monthYear, notifications]) => (
              <NotificationSection key={monthYear}>
                <Spacer position="top" size="large">
                  <DateLabel>{monthYear}</DateLabel>
                </Spacer>
                {notifications.map((notification, index) => (
                  <Spacer position="top" size="large" key={index}>
                    <NotificationHeader>
                      <NotText variant="label">{notification.category}</NotText>
                      <TimeLabel>
                        {formatAMPM(notification.createdAt)}
                      </TimeLabel>
                    </NotificationHeader>
                    <Spacer position="top" size="large">
                      <NotificationBox>
                        <Ionicons
                          name="notifications"
                          size={28}
                          color="#263A5C"
                        />
                        <NotificationText>
                          {notification.message}
                        </NotificationText>
                      </NotificationBox>
                    </Spacer>
                  </Spacer>
                ))}
              </NotificationSection>
            )
          )
        ) : (
          <NoAppWrapper>
            <Spacer position="bottom" size="extraLarge">
              <NoNotSVG />
            </Spacer>
            <Spacer position="bottom" size="large">
              <Text variant="place">
                All your notifications will appear here
              </Text>
            </Spacer>
          </NoAppWrapper>
        )}
      </NotWrapper>
    </NotContainer>
  );
};

export default NotificationScreen;
