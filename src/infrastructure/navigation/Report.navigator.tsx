import ReportScreen from "@/src/feautures/report/screens";
import WeeklyReport from "@/src/feautures/report/screens/WeeklyReport";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../theme";

const Stack = createStackNavigator();

const ReportNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ReportMain"
      screenOptions={{
        headerStatusBarHeight: 0,
        headerTitleStyle: {
          fontFamily: theme.fonts.poppinsMedium,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="ReportMain"
        component={ReportScreen}
        options={{
          headerTitle: 'My Report',
        }}
      />
      <Stack.Screen
        name="Weekly Report"
        component={WeeklyReport}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
 
export default ReportNavigator;