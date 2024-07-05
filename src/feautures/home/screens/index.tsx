import React, { useEffect, useState, useCallback } from "react";
import {
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { View, ScrollView, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import {
  AppContainer,
  ArticleContainer,
  ArticleImg,
  ProfileImg,
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
  TouchableCategory,
  TopicContainer,
  SeeText,
} from "../components/Home.styles";
import CovidPic from "../../../../assets/images/covid.png";
import AuthImg from "../../../../assets/images/tosinBabe.png";
import DocImg from "../../../../assets/images/doctor.png";
import Text from "@/src/components/typograpghy/Text.component";
import Spacer from "@/src/components/spacer/Spacer.component";
import AvatarSVG from "@/assets/icons/Avatar";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ArtFooter, ArticleCard, ArticleTextWrap, CardContainer, Date, Title } from "../../article/components/Article.styles";

const Home = ({ navigation }) => {
  console.log(navigation);
  
  const [userData, setUserData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [bookmarks, setBookmarks] = useState({});

  const getData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("data");
      if (storedData !== null) {
        setUserData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetDetails = async () => {
    if (!userData) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://switch-health.onrender.com/patient/${userData.data.user._id}/profile`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userData.data.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
      } else {
        console.error("Failed to fetch profile data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  useEffect(() => {
    handleGetDetails();
  }, [userData]);

  const articles = [
    {
      image: DocImg,
      title: "The 25 Healthiest Fruits You Can Eat, According to a Nutritionist",
      date: "Jun 10, 2024",
      authorPic: AuthImg,
      author: 'Popins Shallom',
      readTime: "3min read",
      info: `Dental health is a vital component of overall success, influencing multiple facets of life. Proper oral hygiene practices, such as regular brushing, flossing, and dental check-ups, help prevent common dental issues like cavities, gum disease, and bad breath. These problems, if left unchecked, can lead to more severe health complications and negatively affect one's self-esteem and social interactions. 
      
      A healthy, bright smile contributes significantly to making positive first impressions, which are crucial in both personal and professional contexts. In the workplace, a confident smile can enhance communication skills, foster better relationships with colleagues and clients, and even improve job prospects. People who maintain good dental health are often perceived as more attractive, confident, and approachable. 
      
      Moreover, dental health is closely linked to overall physical health. Poor oral hygiene can lead to serious health issues such as cardiovascular disease, diabetes, and respiratory infections. By taking care of one's teeth and gums, individuals can reduce the risk of these systemic health problems, promoting overall well-being and productivity. 
      
      Investing in dental health also underscores the importance of self-care and discipline. Regular dental visits and good oral hygiene practices reflect a commitment to personal health and well-being. This discipline can translate into other areas of life, contributing to academic, professional, and personal achievements. 
      
      In summary, dental health is not just about maintaining a beautiful smile; it is integral to overall health and success. Prioritizing oral hygiene can enhance self-confidence, improve social and professional relationships, and prevent serious health issues, ultimately supporting a more successful and fulfilling life.
      `,
    },
    {
      image: CovidPic,
      title: "Dental Health a Part to Success",
      date: "Apr 10, 2024",
      authorPic: AuthImg,
      author: 'Steph Baby',
      readTime: "15min read",
      info: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum cupiditate ipsa assumenda quae illo doloremque voluptate in! 
      
      Atque nemo commodi enim. Quos, eaque est blanditiis sed sit non, illo omnis labore molestiae libero quis sunt! Ducimus obcaecati ex, magnam quidem laborum reprehenderit incidunt quam ut quia quasi id distinctio nulla.
      `,
    },
  ];

  const toggleBookmark = (title) => {
    setBookmarks((prevBookmarks) => ({
      ...prevBookmarks,
      [title]: !prevBookmarks[title],
    }));
  };

  const renderItem = ({ item }) => (
    <TouchableArticle
        onPress={() =>
        navigation.navigate("Article Detail", {
          article: item,
        })
      }
    >
      <ArticleCard>
        <CardContainer>
          <ArticleImg source={item.image} />
          <ArticleTextWrap>
            <Title>{item.title}</Title>
            <ArtFooter>
              <Date>{item.date}</Date>
              <Date>{item.readTime}</Date>
            </ArtFooter>
          </ArticleTextWrap>
        </CardContainer>
        <TouchableOpacity onPress={() => toggleBookmark(item.title)}>
          <Ionicons
            name={bookmarks[item.title] ? "bookmark" : "bookmark-outline"}
            size={20}
            color="#407CE2"
          />
        </TouchableOpacity>
      </ArticleCard>
    </TouchableArticle>
  );

  return (
    <View>
      <ScrollView style={styles.whiteWrapper}>
        <AppContainer>
          <HeaderContainer>
            <Spacer>
              <Header>
                <ProfileContainer onPress={() => navigation.navigate('Profile')}>
                  {profileData &&
                  profileData.data &&
                  profileData.data.avatar ? (
                    <ProfileImg
                      source={{ uri: profileData.data.avatar }}
                      style={styles.profileImage}
                    />
                  ) : (
                    <AvatarSVG width={50} height={50} />
                  )}
                  <GreetContainer>
                    <Text style={styles.greeting}>Hello,</Text>
                    <Text style={styles.name}>
                      {profileData ? profileData.data.fullName : " Guest "}
                    </Text>
                  </GreetContainer>
                </ProfileContainer>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                  <Ionicons name="notifications" size={28} color="#1A1F71" />
                </TouchableOpacity>
              </Header>
            </Spacer>
            <Spacer position="top" size="extraLarge">
              <Text variant="main">Indexes</Text>
              <Spacer position="bottom" size="large" />
            </Spacer>
            <IndexContainer>
              <IndexBox>
                <IndexItem>
                  <Text style={styles.indexTitle}>Calories</Text>
                  <Text style={styles.indexValue}>35</Text>
                  <Text style={styles.indexUnit}>kcal</Text>
                </IndexItem>
                <Octicons name="flame" size={20} color="#1E1E1E" />
              </IndexBox>
              <IndexBox>
                <IndexItem>
                  <Text style={styles.indexTitle}>Activities</Text>
                  <Text style={styles.indexValue}>1.2k</Text>
                  <Text style={styles.indexUnit}>steps</Text>
                </IndexItem>
                <Ionicons name="footsteps-outline" size={20} color="#1E1E1E" />
              </IndexBox>
            </IndexContainer>
          </HeaderContainer>
          <Spacer position="top" size="extraLarge" />
          <Spacer position="bottom" size="extraLarge">
            <SearchInput
              placeholderTextColor={"#221F1F99"}
              iconColor={"#221F1F99"}
              placeholder="Search doctor, drugs, articles..."
            />
          </Spacer>
          <Spacer position="bottom" size="extraLarge">
            <CategoriesContainer>
              <Spacer position="bottom" size="medium">
                <Text variant="main">Categories</Text>
              </Spacer>
              <CategoryScroll
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={scrollStyle.tstyles}
              >
                <TouchableCategory
                  onPress={() => navigation.navigate("Top Doctors")}
                >
                  <CatIcon>
                    <FontAwesome6
                      name="user-doctor"
                      size={20}
                      color="#1A1F71"
                    />
                  </CatIcon>
                  <Text style={styles.categoryText}>Top Doctors</Text>
                </TouchableCategory>
                <TouchableCategory>
                  <CatIcon>
                    <MaterialCommunityIcons
                      name="pill"
                      size={20}
                      color="#1A1F71"
                    />
                  </CatIcon>
                  <Text style={styles.categoryText}>Pharmacy</Text>
                </TouchableCategory>
                <TouchableCategory
                  onPress={() => navigation.navigate("Appointments")}
                >
                  <CatIcon>
                    <MaterialCommunityIcons
                      name="clipboard-text-outline"
                      size={20}
                      color="#1A1F71"
                    />
                  </CatIcon>
                  <Text style={styles.categoryText}>Appointments</Text>
                </TouchableCategory>
                <TouchableCategory
                  onPress={() => navigation.navigate("Ambulance")}
                >
                  <CatIcon>
                    <FontAwesome5 name="ambulance" size={20} color="#1A1F71" />
                  </CatIcon>
                  <Text style={styles.categoryText}>Ambulance</Text>
                </TouchableCategory>
                <TouchableCategory>
                  <CatIcon>
                    <Ionicons
                      name="footsteps-outline"
                      size={20}
                      color="#1A1F71"
                    />
                  </CatIcon>
                  <Text style={styles.categoryText}>Step metrics</Text>
                </TouchableCategory>
              </CategoryScroll>
            </CategoriesContainer>
          </Spacer>

          <ArticleContainer>
            <TopicContainer>
              <Text variant="main">Health articles</Text>
              <SeeText 
                variant="body"
                onPress={()=>navigation.navigate('Health articles')}
              >See all</SeeText>
            </TopicContainer>
            <FlatList
              data={articles}
              renderItem={renderItem}
              keyExtractor={item => item.title}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
          </ArticleContainer>
          <Spacer position="bottom" size="large"></Spacer>
        </AppContainer>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("Emergency")}>
        <CatIcon style={styles.emergency}>
          <MaterialCommunityIcons
            name="phone-alert-outline"
            size={30}
            color="white"
          />
        </CatIcon>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const scrollStyle = StyleSheet.create({
  tstyles: {
    justifyContent: "space-between",
  },
});
