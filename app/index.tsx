import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import OnboardScreen from "../src/screens/Onboarding.Screen";
import AccountScreen from "../src/feautures/account/screens/Account.Screen";
import Welcome from "@/src/screens";
import Login from "@/src/feautures/account/screens/Login.screen";
import SignUp from "@/src/feautures/account/screens/SignUp.screen";

export default function Index() {
  // const Overview = styled.View`
  //   flex: 1;
  //   justify-content: center;
  //   background-color: #ffffff;
  //   align-items: center;
  // `;
  
  return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Onboarding" component={OnboardScreen} />
        <Stack.Screen name="Main" component={AccountScreen}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Sign Up' component={SignUp} />
      </Stack.Navigator>
  );
}

// screenOptions={{headerShown: false}}