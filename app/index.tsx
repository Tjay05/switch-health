import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components";

// Font Imports
import { useFonts as useInter, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { useFonts as usePoppins, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

const Stack = createStackNavigator();

// Page Imports
import OnboardScreen from "../src/screens/Onboarding.Screen";
import AccountScreen from "../src/feautures/account/screens/Account.Screen";
import Welcome from "@/src/screens";
import Login from "@/src/feautures/account/screens/Login.screen";
import SignUp from "@/src/feautures/account/screens/SignUp.screen";
import { theme } from "@/src/infrastructure/theme";
import OTPage from "@/src/feautures/account/screens/Otp.Screen";
import SuccessPage from "@/src/feautures/account/screens/Success.screen";
import ForgotPassword from "@/src/feautures/account/screens/ForgotPword";

export default function Index() {
  const [interLoaded] = useInter({
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_700Bold
  });
  
  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold
  });

  if (!interLoaded || !poppinsLoaded) {
    return null
  }  
  
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

// screenOptions={{headerShown: false}}