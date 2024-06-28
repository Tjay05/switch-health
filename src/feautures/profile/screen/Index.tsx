import { Ionicons } from '@expo/vector-icons';
import { 
  HeaderText,
  MenuIcon,
  MenuItems,
  MenuText,
  ProfileContainer,
  ProfileHead,
  ProfileMenu,
  ProfileOverview,
  Profstyles as styles, 
  SetIconWrap, 
  StatsBox, 
  StatsContainer,
  SvgWrap,
  TouchMenu
} from '../components/Profile.styles';
import Spacer from '@/src/components/spacer/Spacer.component';
import Text from '@/src/components/typograpghy/Text.component';
import ProfSVG from '@/assets/icons/ProfileSvg';

const ProfileScreen = ({ navigation }) => {
  return (
    <ProfileOverview contentContainerStyle={styles.contentContainer}>
      <ProfileHead>
        <HeaderText variant='main1'>Profile Overview</HeaderText>
        <SetIconWrap>
          <Ionicons name="settings" size={28} color="white" />
        </SetIconWrap>
      </ProfileHead>
      <SvgWrap>
        <ProfSVG width={100} height={100}/>
      </SvgWrap>
      <ProfileContainer>
        <Spacer position='top' size='extraLarge'>
          <StatsContainer>
            <StatsBox>
              <Ionicons name="footsteps" size={34} color="#407BFF" />
              <Text variant='body'>Steps</Text>
              <Text variant='main1'>1,023Km</Text>
            </StatsBox>
            <StatsBox>
              <Ionicons name="flame" size={34} color="#407BFF" />
              <Text variant='body'>Calories</Text>
              <Text variant='main1'>756cal</Text>
            </StatsBox>
            <StatsBox>
              <Ionicons name="scale" size={34} color="#407BFF" />
              <Text variant='body'>Weight</Text>
              <Text variant='main1'>103lbs</Text>
            </StatsBox>
          </StatsContainer>
        </Spacer>
        <Spacer position='top' size='large'/>
        <ProfileMenu>
          <TouchMenu>
            <MenuItems>
              <MenuIcon>
                <Ionicons name='heart-outline' size={24} color="#1E90FF" />
              </MenuIcon>
              <MenuText variant='place'>My Saved Articles</MenuText>
            </MenuItems>
            <Ionicons name="chevron-forward-outline" size={30} color="#221F1F99" />
          </TouchMenu>
          <TouchMenu>
            <MenuItems>
              <MenuIcon>
                <Ionicons name='calendar-outline' size={24} color="#1E90FF" />
              </MenuIcon>
              <MenuText variant='place'>Appointments</MenuText>
            </MenuItems>
            <Ionicons name="chevron-forward-outline" size={30} color="#221F1F99" />
          </TouchMenu>
          <TouchMenu>
            <MenuItems>
              <MenuIcon>
                <Ionicons name='card-outline' size={24} color="#1E90FF" />
              </MenuIcon>
              <MenuText variant='place'>Payment Method</MenuText>
            </MenuItems>
            <Ionicons name="chevron-forward-outline" size={30} color="#221F1F99" />
          </TouchMenu>
          <TouchMenu onPress={() => navigation.navigate('ProfileEdit')}>
            <MenuItems>
              <MenuIcon>
                <Ionicons name='create-outline' size={24} color="#1E90FF" />
              </MenuIcon>
              <MenuText variant='place'>Edit Profile</MenuText>
            </MenuItems>
            <Ionicons name="chevron-forward-outline" size={30} color="#221F1F99" />
          </TouchMenu>
          <TouchMenu>
            <MenuItems>
              <MenuIcon>
                <Ionicons name='notifications-outline' size={24} color="#1E90FF" />
              </MenuIcon>
              <MenuText variant='place'>Notifications</MenuText>
            </MenuItems>
            <Ionicons name="chevron-forward-outline" size={30} color="#221F1F99" />
          </TouchMenu>
          <TouchMenu>
            <MenuItems>
              <MenuIcon>
                <Ionicons name='exit-outline' size={24} color="#1E90FF" />
              </MenuIcon>
              <MenuText variant='place'>Logout</MenuText>
            </MenuItems>
            <Ionicons name="chevron-forward-outline" size={30} color="#221F1F99" />
          </TouchMenu>
        </ProfileMenu>
      </ProfileContainer>
    </ProfileOverview>
  );
}
 
export default ProfileScreen;
