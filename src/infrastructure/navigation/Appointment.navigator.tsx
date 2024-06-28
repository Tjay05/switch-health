import AppointmentScreen from "@/src/feautures/appointment/screens/Index";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../theme";

const Stack = createStackNavigator();

const AppointmentNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AppointmentMain"
      screenOptions={{
        headerStatusBarHeight: 0,
        headerTitleStyle: {
          fontFamily: theme.fonts.poppinsMedium,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="AppointmentMain" 
        component={AppointmentScreen}
        options={{
          headerTitle: 'Appointments',
          headerStatusBarHeight: 0,
        }}
      />
    </Stack.Navigator>
  );
}
 
export default AppointmentNavigator;