import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components";

import AccountScreen from "@/src/feautures/account/screens/Account.Screen";
import ForgotPassword from "@/src/feautures/account/screens/ForgotPword";
import Login from "@/src/feautures/account/screens/Login.screen";
import OTPage from "@/src/feautures/account/screens/Otp.Screen";
import SignUp from "@/src/feautures/account/screens/SignUp.screen";
import SuccessPage from "@/src/feautures/account/screens/Success.screen";
import Welcome from "@/src/screens";
import OnboardScreen from "@/src/screens/Onboarding.Screen";
import { theme } from "../theme";


const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{cardStyle: { backgroundColor:'white' }}}
        />
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardScreen}
          options={{cardStyle: { backgroundColor:'white' }}}
        />
        <Stack.Screen 
          name="Main" 
          component={AccountScreen}
          options={{cardStyle: { backgroundColor:'white' }}}
        />
        <Stack.Screen 
          name='Login' 
          component={Login} 
          options={{cardStyle: { backgroundColor:'white' }}}
        />
        <Stack.Screen 
          name='Forgot Password' 
          component={ForgotPassword} 
          options={{cardStyle: { backgroundColor:'white' }}}
        />
        <Stack.Screen 
          name='Sign Up' 
          component={SignUp} 
          options={{cardStyle: { backgroundColor:'white' }}}
        />
        <Stack.Screen 
          name='Otp' 
          component={OTPage} 
          options={{cardStyle: { backgroundColor:'white' }}}
        />
        <Stack.Screen 
          name='Success' 
          component={SuccessPage} 
          options={{cardStyle: { backgroundColor:'white' }}}
        />
      </Stack.Navigator>
    </>
  );
}
 
export default AccountNavigator;