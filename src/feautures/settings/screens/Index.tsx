import Text from "@/src/components/typograpghy/Text.component";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { Alert } from "react-native";
import { 
  Menu,
  MenuIcon,
  MenuItems,
  MenuLittleText,
  MenuText,
  SettingContainer,
  SettingWrapper
} from "../component/Settings.styles";

const SettingsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SettingWrapper>
      <SettingContainer>
        <Menu onPress={() => navigation.navigate("ProfileEdit")}>
          <MenuItems>
            <MenuIcon>
              <Ionicons name="create-outline" size={24} color="#407BFF" />
            </MenuIcon>
            <MenuText>
              <Text variant="place">Edit Profile</Text>
              <MenuLittleText>Change your profile details</MenuLittleText>
            </MenuText>
          </MenuItems>
          <Ionicons
            name="chevron-forward-outline"
            size={30}
            color="#221F1F99"
          />
        </Menu>
        {/* <Menu
          onPress={() => Alert.alert("Only one language available right now!")}
        >
          <MenuItems>
            <MenuIcon>
              <MaterialCommunityIcons name="web" size={24} color="#407BFF" />
            </MenuIcon>
            <MenuText>
              <Text variant="place">Language Preference</Text>
              <MenuLittleText>Set your language preferences</MenuLittleText>
            </MenuText>
          </MenuItems>
          <Ionicons
            name="chevron-forward-outline"
            size={30}
            color="#221F1F99"
          />
        </Menu> */}
        {/* <Menu>
          <MenuItems>
            <MenuIcon>
              <Octicons name="key" size={24} color="#407BFF" />
            </MenuIcon>
            <MenuText>
              <Text variant="place">Change Password</Text>
              <MenuLittleText>Change or update your password</MenuLittleText>
            </MenuText>
          </MenuItems>
          <Ionicons
            name="chevron-forward-outline"
            size={30}
            color="#221F1F99"
          />
        </Menu> */}
        <Menu onPress={() => navigation.navigate("Notifications Settings")}>
          <MenuItems>
            <MenuIcon>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#407BFF"
              />
            </MenuIcon>
            <MenuText>
              <Text variant="place">Notifications</Text>
              <MenuLittleText>Notification settings</MenuLittleText>
            </MenuText>
          </MenuItems>
          <Ionicons
            name="chevron-forward-outline"
            size={30}
            color="#221F1F99"
          />
        </Menu>
        <Menu
          onPress={() => Alert.alert("Terms and conditions are coming soon")}
        >
          <MenuItems>
            <MenuIcon>
              <MaterialCommunityIcons name="read" size={24} color="#407BFF" />
            </MenuIcon>
            <MenuText>
              <Text variant="place">Terms of Services</Text>
              <MenuLittleText>Read our terms and conditions</MenuLittleText>
            </MenuText>
          </MenuItems>
          <Ionicons
            name="chevron-forward-outline"
            size={30}
            color="#221F1F99"
          />
        </Menu>
        <Menu>
          <MenuItems>
            <MenuIcon>
              <MaterialIcons name="system-update" size={24} color="#407BFF" />
            </MenuIcon>
            <MenuText>
              <Text variant="place">App Updates</Text>
              <MenuLittleText>Check for updates</MenuLittleText>
            </MenuText>
          </MenuItems>
          <Ionicons
            name="chevron-forward-outline"
            size={30}
            color="#221F1F99"
          />
        </Menu>
      </SettingContainer>
    </SettingWrapper>
  );
}
 
export default SettingsScreen;