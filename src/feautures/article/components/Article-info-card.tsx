import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Text from "@/src/components/typograpghy/Text.component";
import {
  ArtFooter,
  ArticleCard,
  ArticleImg,
  ArticleTextWrap,
  ArticleWrapper,
  CardContainer,
  Date as ArticleDate,
  Title,
} from "./Article.styles";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const ArticleInfo = ({ article = {} }) => {
  const [bookmarks, setBookmarks] = useState({});

  const {
    image = "https://res.cloudinary.com/dba1aezsn/image/upload/v1720109527/24_Secrets_Pain_Doctors_Won_t_Tell_You_aiwlxf.jpg",
    title = "Dental Health a Part to Success",
    createdAt = "2024-07-04T16:34:44.298+00:00",
    readTime = "5min read",
  } = article;

  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const storedBookmarks = await AsyncStorage.getItem(
          "bookmarkedArticles"
        );
        if (storedBookmarks) {
          setBookmarks(JSON.parse(storedBookmarks));
        }
      } catch (error) {
        console.error("Failed to load bookmarks", error);
      }
    };

    loadBookmarks();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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

  return (
    <ArticleWrapper>
      <ArticleCard>
        <CardContainer>
          <ArticleImg source={{ uri: image }} />
          <ArticleTextWrap>
            <Title>
              <Text>{title}</Text>
            </Title>
            <ArtFooter>
              <ArticleDate>
                <Text>{formatDate(createdAt)}</Text>
              </ArticleDate>
              <ArticleDate>
                <Text>{readTime}</Text>
              </ArticleDate>
            </ArtFooter>
          </ArticleTextWrap>
        </CardContainer>
        <TouchableOpacity onPress={() => toggleBookmark(title)}>
          <Ionicons
            name={bookmarks[title] ? "bookmark" : "bookmark-outline"}
            size={20}
            color="#407CE2"
          />
        </TouchableOpacity>
      </ArticleCard>
    </ArticleWrapper>
  );
};

export default ArticleInfo;
