import DocsNearMe from "@/src/feautures/appointment/screens/DoctorNear.screen";
import SuccessfulPage from "@/src/feautures/home/components/Success.screen";
import Home from "@/src/feautures/home/screens";
import Ambulance from "@/src/feautures/home/screens/Ambulance";
import BookAppointment from "@/src/feautures/home/screens/BookAppointment";
import TopDoctors from "@/src/feautures/home/screens/Doctors";
import Emergency from "@/src/feautures/home/screens/Emergency";
import NotificationScreen from "@/src/feautures/home/screens/Notification.screen";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { theme } from "../theme";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="HomeMain" 
      screenOptions={{
        headerShown: false,
        headerStatusBarHeight: 0,
        headerTitleStyle: {
          fontFamily: theme.fonts.poppinsMedium,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="HomeMain"
        component={Home}
      />
      <Stack.Screen
        name="Top Doctors"
        component={TopDoctors}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="DoctorAppointment"
        component={DocsNearMe}
        options={{
          ...TransitionPresets.ModalTransition,
          headerTitle: 'Doctors near me',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Book Appointment"
        component={BookAppointment}
        options={{
          headerTitle: 'Book an appointment',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Success"
        component={SuccessfulPage}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Emergency"
        component={Emergency}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Ambulance"
        component={Ambulance}
      />
    </Stack.Navigator>
  );
}
 
export default HomeNavigator;