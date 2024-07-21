import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { Button, TouchableOpacity } from "react-native";
import { theme } from "../theme";

// Page Imports
import DocsNearMe from "@/src/feautures/appointment/screens/DoctorNear.screen";
import ArticleScreen from "@/src/feautures/article/screens";
import ArticleDetail from "@/src/feautures/article/screens/ArticleDetail";
import SavedArticles from "@/src/feautures/article/screens/Saved.Articles";
import SuccessfulPage from "@/src/feautures/home/components/Success.screen";
import Home from "@/src/feautures/home/screens";
import Ambulance from "@/src/feautures/home/screens/Ambulance";
import BookAppointment from "@/src/feautures/home/screens/BookAppointment";
import TopDoctors from "@/src/feautures/home/screens/Doctors";
import Emergency from "@/src/feautures/home/screens/Emergency";
import NotificationScreen from "@/src/feautures/home/screens/Notification.screen";
import NotificationSettings from "@/src/feautures/home/screens/Notification.Settings";
import CartScreen from "@/src/feautures/pharmacy/screens/Cart";
import PharmacyScreen from "@/src/feautures/pharmacy/screens/Index";
import PharmDetails from "@/src/feautures/pharmacy/screens/Pharmacy.Details";

const Stack = createStackNavigator();

const HomeNavigator = ({ navigation }) => {
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
        name="Pharmacy"
        component={PharmacyScreen}options={{
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={{ marginRight: 16 }}
            >
              <Ionicons name="cart-outline" size={25} color='black' />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Pharmacy Details"
        component={PharmDetails}
        options={{
          ...TransitionPresets.ModalTransition,
          headerTitle: 'Details',
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={{ marginRight: 16 }}
            >
              <Ionicons name="cart-outline" size={25} color='black' />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Health articles"
        component={ArticleScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Article Detail"
        component={ArticleDetail}
      />
      <Stack.Screen
        name="Saved articles"
        component={SavedArticles}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="DoctorAppointment"
        component={DocsNearMe}
        options={{
          ...TransitionPresets.ModalTransition,
          headerTitle: 'Doctors near me',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Book Appointment"
        component={BookAppointment}
        options={{
          headerTitle: 'Book an appointment',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Success"
        component={SuccessfulPage}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          headerShown: true,
          headerLeft: () => navigation.goBack,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications Settings')}
              style={{ marginRight: 16 }}
            >
              <Ionicons name="settings" size={25} color='black' />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Notifications Settings"
        component={NotificationSettings}
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