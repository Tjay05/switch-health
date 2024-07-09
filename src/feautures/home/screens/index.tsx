import React, { useEffect, useState, useCallback } from "react";
import BackgroundFetch from "react-native-background-fetch";
import {
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Accelerometer } from "expo-sensors";
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
import Text from "@/src/components/typograpghy/Text.component";
import Spacer from "@/src/components/spacer/Spacer.component";
import AvatarSVG from "@/assets/icons/Avatar";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ArtFooter,
  ArticleCard,
  ArticleTextWrap,
  CardContainer,
  Date as ArticleDate,
  Title,
} from "../../article/components/Article.styles";

const Home = ({ navigation }) => {
  console.log(navigation);

  const [userData, setUserData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [bookmarks, setBookmarks] = useState({});
  const [stepCount, setStepCount] = useState(0);
  const [lastY, setlastY] = useState(0);
  const [lastTimeStamp, setlastTimeStamp] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [caloriesBurnt, setCaloriesBurnt] = useState(0);
  useEffect(() => {
    const loadStepCount = async () => {
      const storedStepCount = await AsyncStorage.getItem("stepCount");
      const storedCalorieBurnt = await AsyncStorage.getItem("caloriesBurnt");
      if (storedStepCount !== null && storedCalorieBurnt !== null) {
        setStepCount(JSON.parse(storedStepCount));
        setCaloriesBurnt(JSON.parse(storedCalorieBurnt));
      }
    };

    loadStepCount();
  }, []);

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

  useEffect(() => {
    AsyncStorage.setItem("stepCount", stepCount.toString());
  }, [stepCount]);

  useEffect(() => {
    let subscription;
    Accelerometer.isAvailableAsync().then((result) => {
      if (result) {
        subscription = Accelerometer.addListener((accelerometer) => {
          const { y } = accelerometer;
          const threshold = 0.09;
          const timestamp = new Date().getTime();

          if (
            Math.abs(y - lastY) > threshold &&
            !isCounting &&
            timestamp - lastTimeStamp > 800
          ) {
            setIsCounting(true);
            setlastY(y);
            setlastTimeStamp(timestamp);

            setStepCount((prevSteps) => prevSteps + 1);

            setTimeout(() => {
              setIsCounting(false);
              calculateCaloriesBurnt();
            }, 1000);
          }
        });
      } else {
        console.log("Accelerometer not available on this device");
      }
    });

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [isCounting, lastY, lastTimeStamp]);

useEffect(() => {
  const storeCaloriesBurnt = async () => {
    try {
      await AsyncStorage.setItem("caloriesBurnt", caloriesBurnt.toString());
    } catch (error) {
      console.error("Error storing calories burnt:", error);
    }
  };

  storeCaloriesBurnt();
}, [caloriesBurnt]);

  const calculateCaloriesBurnt = () => {
    const caloriesPerStep = 0.05;
    const calculatedCalories = stepCount * caloriesPerStep;
    setCaloriesBurnt(calculatedCalories);
  };

  const articles = [
    {
      image:
        "https://res.cloudinary.com/dba1aezsn/image/upload/v1720110110/Dental_Decoration_Clinic_Aesthetic_Design_zxeful.jpg",
      title: "Dental Health in a short whole",
      createdAt: "2024-07-03T13:31:48.919Z",
      avatar:
        "https://res.cloudinary.com/dba1aezsn/image/upload/v1720110043/lesh_seoedx.jpg",
      fullName: "Leshaodo Omotayo",
      readTime: "3 minutes read",
      content: `Dental health is a vital component of overall success, influencing multiple facets of life. Proper oral hygiene practices, such as regular brushing, flossing, and dental check-ups, help prevent common dental issues like cavities, gum disease, and bad breath. These problems, if left unchecked, can lead to more severe health complications and negatively affect one's self-esteem and social interactions. <br> A healthy, bright smile contributes significantly to making positive first impressions, which are crucial in both personal and professional contexts. In the workplace, a confident smile can enhance communication skills, foster better relationships with colleagues and clients, and even improve job prospects. People who maintain good dental health are often perceived as more attractive, confident, and approachable. <br>Moreover, dental health is closely linked to overall physical health. Poor oral hygiene can lead to serious health issues such as cardiovascular disease, diabetes, and respiratory infections. By taking care of one's teeth and gums, individuals can reduce the risk of these systemic health problems, promoting overall well-being and productivity. <br> Investing in dental health also underscores the importance of self-care and discipline. Regular dental visits and good oral hygiene practices reflect a commitment to personal health and well-being. This discipline can translate into other areas of life, contributing to academic, professional, and personal achievements. <br>In summary, dental health is not just about maintaining a beautiful smile; it is integral to overall health and success. Prioritizing oral hygiene can enhance self-confidence, improve social and professional relationships, and prevent serious health issues, ultimately supporting a more successful and fulfilling life.
    `,
    },
    {
      image:
        "https://res.cloudinary.com/dba1aezsn/image/upload/v1720013159/Lady_Health_Justice_-_Healthcare_should_be_like_u4mo2q.jpg",
      title: "Health and Law",
      createdAt: "2024-07-03T13:31:48.919Z",
      avatar:
        "https://res.cloudinary.com/dba1aezsn/image/upload/v1720013199/pic_1_sox5mu.jpg",
      fullName: "Angel Ugochukwu",
      readTime: "5 minutes read",
      content: `Health and law intersect in numerous ways, encompassing the regulation of healthcare practices, the protection of patient rights, and the formulation of public health policies. Health law governs the administration of healthcare services, ensuring quality standards and ethical practices among providers. It includes laws on medical malpractice, patient confidentiality, informed consent, and the licensing of healthcare professionals. <br> Public health law focuses on the legal frameworks that enable governments to manage and prevent disease outbreaks, promote healthy behaviors, and ensure access to healthcare. This includes legislation on vaccination mandates, smoking bans, and regulations to control the spread of infectious diseases. <br> Additionally, health law addresses issues of healthcare accessibility and equity, aiming to reduce disparities and ensure that all individuals receive adequate care regardless of their socioeconomic status. It also encompasses bioethics, which deals with the moral implications of medical advancements and technologies, such as genetic testing and end-of-life care. <br> Overall, the field of health law is crucial in maintaining the integrity of healthcare systems, protecting patient rights, and promoting public health and safety.
    `,
    },
  ];

  const toggleBookmark = async (title) => {
    const updatedBookmarks = {
      ...bookmarks,
      [title]: !bookmarks[title],
    };

    setBookmarks(updatedBookmarks);

    try {
      await AsyncStorage.setItem(
        "bookmarkedArticles",
        JSON.stringify(updatedBookmarks)
      );
    } catch (error) {
      console.error("Failed to save bookmark", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
          <ArticleImg source={{ uri: item.image }} />
          <ArticleTextWrap>
            <Title>{item.title}</Title>
            <ArtFooter>
              <ArticleDate>{formatDate(item.createdAt)}</ArticleDate>
              <ArticleDate>{item.readTime}</ArticleDate>
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
      <ScrollView 
        style={styles.whiteWrapper}
        showsVerticalScrollIndicator={false}
      >
        <AppContainer>
          <HeaderContainer>
            <Spacer>
              <Header>
                <ProfileContainer
                  onPress={() => navigation.navigate("Profile")}
                >
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("Notifications")}
                >
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
                  <Text style={styles.indexValue}>
                    {(caloriesBurnt/ 1000).toFixed(4)}
                  </Text>
                  <Text style={styles.indexUnit}>kcal</Text>
                </IndexItem>
                <Octicons name="flame" size={20} color="#1E1E1E" />
              </IndexBox>
              <IndexBox>
                <IndexItem>
                  <Text style={styles.indexTitle}>Activities</Text>
                  <Text style={styles.indexValue}>{stepCount}</Text>
                  <Text style={styles.indexUnit}>steps</Text>
                </IndexItem>
                <Ionicons name="footsteps-outline" size={20} color="#1E1E1E" />
              </IndexBox>
            </IndexContainer>
          </HeaderContainer>
          <Spacer position="top" size="extraLarge" >
          </Spacer>
          {/* <Spacer position="bottom" size="extraLarge">
            <SearchInput
              placeholderTextColor={"#221F1F99"}
              iconColor={"#221F1F99"}
              placeholder="Search doctor, drugs, articles..."
            />
          </Spacer> */}
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
                onPress={() => navigation.navigate("Health articles")}
              >
                See all
              </SeeText>
            </TopicContainer>
            <FlatList
              data={articles}
              renderItem={renderItem}
              keyExtractor={(item) => item.title}
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
