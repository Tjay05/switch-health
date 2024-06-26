import Home from "@/src/feautures/home/screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="HomeMain" 
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="HomeMain"
        component={Home}
      />
    </Stack.Navigator>
  );
}
 
export default HomeNavigator;