import ProfileEdit from "@/src/feautures/profile/screen/EditProfile";
import ProfileScreen from "@/src/feautures/profile/screen/Index";
import SettingsScreen from "@/src/feautures/settings/screens/Index";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../theme";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  
  return (
    <Stack.Navigator
      initialRouteName="ProfileMain"
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
        name="ProfileMain" 
        component={ProfileScreen}
      />
      <Stack.Screen
        name="ProfileEdit" 
        component={ProfileEdit}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
 
export default ProfileNavigator;