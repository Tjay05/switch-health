import { FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { View, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { 
  AppContainer,
  ArticleContainer,
  ArticleImg,
  ArticleInfo,
  ArticleText,
  CategoriesContainer,
  CategoryScroll,
  CatIcon,
  GreetContainer,
  Header,
  HeaderContainer,
  HomeStyles as styles, 
  IndexBox, 
  IndexContainer, 
  IndexItem, 
  ProfileContainer,
  SearchInput,
  TouchableArticle,
  TouchableCategory
} from '../components/Home.styles';

// Pic Imports
import CovidPic from '../../../../assets/images/covid.png';
import DocImg from '../../../../assets/images/doctor.png';
import Text from '@/src/components/typograpghy/Text.component';
import Spacer from '@/src/components/spacer/Spacer.component';

export const Home = () => {
  return (
    <ScrollView>
      <AppContainer>
        <Spacer position='top' size='extraLarge'>
          <HeaderContainer>
            <Header>
              <ProfileContainer>
                <Image/>
                <GreetContainer>
                  <Text style={styles.greeting}>Hello,</Text>
                  <Text style={styles.name}>Tosin Poppins</Text>
                </GreetContainer>
              </ProfileContainer>
              <Ionicons name='notifications' size={24} color='#1A1F71' />
            </Header>
            <Spacer position='top' size='extraLarge'>
              <Text variant='main'>Indexes</Text>
              <Spacer position='bottom' size='large'/>
            </Spacer>
            <IndexContainer>
              <IndexBox>
                <IndexItem>
                  <Text style={styles.indexTitle}>Calories</Text>
                  <Text style={styles.indexValue}>35</Text>
                  <Text style={styles.indexUnit}>kcal</Text>
                </IndexItem>
                <Octicons name='flame' size={20} color='#1E1E1E' />
              </IndexBox>
              <IndexBox>
                <IndexItem>
                  <Text style={styles.indexTitle}>Activities</Text>
                  <Text style={styles.indexValue}>1.2k</Text>
                  <Text style={styles.indexUnit}>steps</Text>
                </IndexItem>
                <Ionicons name='footsteps-outline' size={20} color='#1E1E1E'/>
              </IndexBox>
            </IndexContainer>
          </HeaderContainer>
        </Spacer>
        <Spacer position='top' size='extraLarge'/>
        <Spacer position='bottom' size='large'>
          <SearchInput placeholder="Search doctor, drugs, articles..." />
        </Spacer>
        <Spacer position='bottom' size='large'>
          <CategoriesContainer>
            <Spacer position='bottom' size='small'>
              <Text variant='main'>Categories</Text>
            </Spacer>
            <CategoryScroll 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              contentContainerStyle={scrollStyle.tstyles}
            >
              <TouchableCategory>
                <CatIcon>
                  <FontAwesome6 name='user-doctor' size={20} color='##1A1F71'/>
                </CatIcon>
                <Text style={styles.categoryText}>Top Doctors</Text>
              </TouchableCategory>
              <TouchableCategory>
                <CatIcon>
                  <MaterialCommunityIcons name='pill' size={20} color='##1A1F71'/>
                </CatIcon>
                <Text style={styles.categoryText}>Pharmacy</Text>
              </TouchableCategory>
              <TouchableCategory>
                <CatIcon>
                  <MaterialCommunityIcons name='clipboard-text-outline' size={20} color='##1A1F71'/>
                </CatIcon>
                <Text style={styles.categoryText}>Appointments</Text>
              </TouchableCategory>
              <TouchableCategory>
                <CatIcon>
                  <FontAwesome5 name='ambulance' size={20} color='##1A1F71'/>
                </CatIcon>
                <Text style={styles.categoryText}>Ambulance</Text>
              </TouchableCategory>
              <TouchableCategory>
                <CatIcon>
                  <Ionicons name='footsteps-outline' size={20} color='##1A1F71'/>
                </CatIcon>
                <Text style={styles.categoryText}>Step metrics</Text>
              </TouchableCategory>
            </CategoryScroll>
          </CategoriesContainer>
        </Spacer>

        <Spacer position='bottom' size='large'>
          <ArticleContainer>
            <Text variant='main'>Health articles</Text>
            <TouchableArticle>
              <ArticleImg source={DocImg}/>
              <Spacer position='right' size='medium'/>
              <Spacer position='right' size='small'/>
              <ArticleInfo>
                <Text style={styles.articleTitle}>The 25 Healthiest Fruits You Can Eat, According to a Nutritionist</Text>
                <Spacer position='top' size='small'>
                  <ArticleText>
                    <Text style={styles.articleDate}>Jul 10, 2023</Text>
                    <Spacer position='left' size='large'>
                      <Text style={styles.articleReadTime}>5min read</Text>
                    </Spacer>
                  </ArticleText>
                </Spacer>
              </ArticleInfo>
            </TouchableArticle>
            <TouchableArticle>
              <ArticleImg source={CovidPic}/>
              <Spacer position='right' size='medium'/>
              <Spacer position='right' size='small'/>
              <ArticleInfo>
                <Text style={styles.articleTitle}>The Impact of COVID-19 on Healthcare Systems</Text>
                <Spacer position='top' size='small'>
                  <ArticleText>
                    <Text style={styles.articleDate}>Jul 10, 2023</Text>
                    <Spacer position='left' size='large'>
                      <Text style={styles.articleReadTime}>5min read</Text>
                    </Spacer>
                  </ArticleText>
                </Spacer>
              </ArticleInfo>
            </TouchableArticle>
          </ArticleContainer>
        </Spacer>
      </AppContainer>
    </ScrollView>
  );
}

export const Appointments = () => <Text>Appointments</Text>

export const Reports = () => <Text>Reports</Text>

export const Profile = () => <Text>Profile</Text>
 
// export default Home;

const scrollStyle = StyleSheet.create({
  tstyles: {
    justifyContent: 'space-between'
  }
})