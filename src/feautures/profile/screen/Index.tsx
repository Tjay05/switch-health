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

const ProfileScreen = () => {
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
          {[
            { label: 'My Saved Articles', icon: 'heart-outline' },
            { label: 'Appointments', icon: 'calendar-outline' },
            { label: 'Payment Method', icon: 'card-outline' },
            { label: 'Edit Profile', icon: 'create-outline' },
            { label: 'Notifications', icon: 'notifications-outline' },
            { label: 'Logout', icon: 'exit-outline' },
          ].map((item, index) => (
            <TouchMenu key={index}>
              <MenuItems>
                <MenuIcon>
                  <Ionicons name={item.icon} size={24} color="#1E90FF" />
                </MenuIcon>
                <MenuText variant='place'>{item.label}</MenuText>
              </MenuItems>
              <Ionicons name="chevron-forward-outline" size={30} color="#221F1F99" />
            </TouchMenu>
          ))}
        </ProfileMenu>
      </ProfileContainer>
    </ProfileOverview>
  );
}
 
export default ProfileScreen;
