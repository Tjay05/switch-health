import Loading from "@/src/components/loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import AccountNavigator from "./Account.navigator";
import AppNavigator from "./AppNavigator";

const Stack = createStackNavigator();

const Navigation = () => {
  const [loading, setLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('AccountNavigator');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AsyncStorage.getItem('data');
        if (data) {
          setInitialRoute('AppNavigator');
        }
      } catch (error) {
        console.error('Failed to fetch data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading/>;
  }

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="AccountNavigator"
        component={AccountNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppNavigator"
        component={AppNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
 
export default Navigation;