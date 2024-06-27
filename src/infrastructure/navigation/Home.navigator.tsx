import Home from "@/src/feautures/home/screens";
import Ambulance from "@/src/feautures/home/screens/Ambulance";
import TopDoctors from "@/src/feautures/home/screens/Doctors";
import Emergency from "@/src/feautures/home/screens/Emergency";
import { createStackNavigator } from "@react-navigation/stack";
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