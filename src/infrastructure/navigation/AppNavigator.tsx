import AppointmentScreen from "@/src/feautures/appointment/screens/Index";
import Home from "@/src/feautures/home/screens";
import ProfileScreen from "@/src/feautures/profile/screen/Index";
import ReportScreen from "@/src/feautures/report/screens";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "../theme";

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              if (iconName = focused) {
                return <Ionicons name="home" size={size} color={color}/>
              } else {
                return <Ionicons name="home" size={size} color={color}/>
              }
            } else if (route.name === 'Reports') {
              if (iconName = focused) {
                return <MaterialCommunityIcons name="clipboard-pulse" size={size} color={color}/>
              } else {
                return <MaterialCommunityIcons name="clipboard-pulse-outline" size={size} color={color}/>
              }
            } else if (route.name === 'Appointments') {
              if (iconName = focused) {
                return <MaterialCommunityIcons name="clipboard-text" size={size} color={color}/>
              } else {
                return <MaterialCommunityIcons name="clipboard-text-outline" size={size} color={color}/>
              }
            } else if (route.name === 'Profile') {
              if (iconName = focused) {
                return <MaterialCommunityIcons name="account" size={size} color={color}/>
              } else {
                return <MaterialCommunityIcons name="account-outline" size={size} color={color}/>
              }
            }
          },
          tabBarActiveTintColor: '#1A1F71',
          tabBarInactiveTintColor: '#221F1F99',
          headerShown: false,
          headerStatusBarHeight: 0,
          headerTitleStyle: {
            fontFamily: theme.fonts.poppinsMedium,
          },
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontFamily: theme.fonts.poppinsMedium,
          },
          tabBarStyle: {
            paddingBottom: 2,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen 
          name="Reports" 
          component={ReportScreen} 
          options={{
            headerShown: true,
            headerTitle: 'My Report',
          }} 
        />
        <Tab.Screen 
          name="Appointments" 
          options={{
            headerShown: true,
          }} 
          component={AppointmentScreen} 
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
}
 
export default AppNavigator;