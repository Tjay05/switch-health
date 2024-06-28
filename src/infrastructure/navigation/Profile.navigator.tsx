import ProfileScreen from "@/src/feautures/profile/screen/Index";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileMain"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="ProfileMain" 
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile',
          headerStatusBarHeight: 0,
        }}
      />
    </Stack.Navigator>
  );
}
 
export default ProfileNavigator;