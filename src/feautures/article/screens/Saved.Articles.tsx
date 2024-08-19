import React, { useEffect, useState, useCallback } from "react";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import Loading from "@/src/components/loader";
import ArticleInfo from "../components/Article-info-card";
import { Articlecontainer, ArticleWrapper } from "../components/Article.styles";
import { TouchableFlatlist } from "../../home/components/Home.styles";
import BadGateWay from "@/src/components/NoNetwork";

const ARTICLES = [
  // {
  //   image:
  //     "https://res.cloudinary.com/dba1aezsn/image/upload/v1720109527/24_Secrets_Pain_Doctors_Won_t_Tell_You_aiwlxf.jpg",
  //   title: "The 25 Healthiest Fruits You Can Eat, According to a Nutritionist",
  //   date: "Jun 10, 2024",
  //   avatar:
  //     "https://res.cloudinary.com/dba1aezsn/image/upload/v1709376574/Blog%20Images/qy1ieqnhlt2gr6zffcih.jpg",
  //   fullName: "Popins Shallom",
  //   readTime: "3min read",
  //   content: `Dental health is a vital component of overall success, influencing multiple facets of life. Proper oral hygiene practices, such as regular brushing, flossing, and dental check-ups, help prevent common dental issues like cavities, gum disease, and bad breath. These problems, if left unchecked, can lead to more severe health complications and negatively affect one's self-esteem and social interactions. 
    
  //   A healthy, bright smile contributes significantly to making positive first impressions, which are crucial in both personal and professional contexts. In the workplace, a confident smile can enhance communication skills, foster better relationships with colleagues and clients, and even improve job prospects. People who maintain good dental health are often perceived as more attractive, confident, and approachable. 
    
  //   Moreover, dental health is closely linked to overall physical health. Poor oral hygiene can lead to serious health issues such as cardiovascular disease, diabetes, and respiratory infections. By taking care of one's teeth and gums, individuals can reduce the risk of these systemic health problems, promoting overall well-being and productivity. 
    
  //   Investing in dental health also underscores the importance of self-care and discipline. Regular dental visits and good oral hygiene practices reflect a commitment to personal health and well-being. This discipline can translate into other areas of life, contributing to academic, professional, and personal achievements. 
    
  //   In summary, dental health is not just about maintaining a beautiful smile; it is integral to overall health and success. Prioritizing oral hygiene can enhance self-confidence, improve social and professional relationships, and prevent serious health issues, ultimately supporting a more successful and fulfilling life.
  //   `,
  // },
];

const SavedArticles = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [bookmarks, setBookmarks] = useState({});
  const [filteredArticles, setFilteredArticles] = useState([]); 
  const [isApiCallFailed, setIsApiCallFailed] = useState(false);

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

  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const storedBookmarks = await AsyncStorage.getItem(
          "bookmarkedArticles"
        );
        if (storedBookmarks) {
          setBookmarks(JSON.parse(storedBookmarks));
          console.log(JSON.parse(storedBookmarks));
        }
      } catch (error) {
        console.error("Failed to load bookmarks", error);
      }
    };

    loadBookmarks();
  }, []);

  useEffect(() => {
    const filtered = articles.filter((article) => bookmarks[article.title]);
    setFilteredArticles(filtered);
  }, [articles, bookmarks]);

  const handleGetDetails = async () => {
    if (!userData) return;
    setIsLoading(true);
    setIsApiCallFailed(false);

    try {
      const response = await fetch(
        `https://switch-health.onrender.com/article/get-articles`,
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
        setArticles(data.data);
        setIsApiCallFailed(false);
      } else {
        setIsApiCallFailed(true);
      }
    } catch (error) {
      setIsApiCallFailed(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userData) {
      handleGetDetails();
    }
  }, [userData]);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const handleRefresh = async () => {
    await handleGetDetails();
  };

  return (
    <>
      {isApiCallFailed && <BadGateWay handleRefresh={handleRefresh}/>}
      {isLoading && <Loading />}
      {!isApiCallFailed && <ArticleWrapper>
        <Articlecontainer>
          <FlatList
            data={filteredArticles.length ? filteredArticles : ARTICLES}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableFlatlist
                onPress={() =>
                  navigation.navigate("Article Detail", {
                    article: item,
                  })
                }
              >
                <ArticleInfo article={item} />
              </TouchableFlatlist>
            )}
            keyExtractor={(item) => item.title}
          />
        </Articlecontainer>
      </ArticleWrapper>}
    </>
  );
};

export default SavedArticles;
