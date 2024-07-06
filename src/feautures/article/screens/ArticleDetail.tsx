import React from "react";
import { ScrollView } from "react-native";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import {
  ArticleDate,
  ArticleDetailContainer,
  ArticleDetailImg,
  ArticleHead,
  ArticleInformation,
  ArticleWrapper,
  AuthorContainer,
  AuthorImg,
  AuthorName,
} from "../components/Article.styles";

const ArticleDetail = ({ route }) => {
  const { article } = route.params;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

const formatContent = (content) => {
  return content.replace(/<br\s*\/?>/gi, "\n\n");
};
  const trimmedContent = (content) => {
    return content.trim();
  };

  return (
    <ArticleWrapper>
      <ArticleDetailContainer showsVerticalScrollIndicator={false}>
        <ArticleHead variant="main">{article.title}</ArticleHead>
        <ArticleDate>{formatDate(article.createdAt)}</ArticleDate>
        <Spacer position="bottom" size="medium">
          <AuthorContainer>
            <AuthorImg source={{ uri: article.avatar }} />
            <AuthorName>{article.fullName}</AuthorName>
          </AuthorContainer>
        </Spacer>
        <Spacer position="bottom" size="XXL">
          <ArticleDetailImg source={{ uri: article.image }} />
        </Spacer>
        <ScrollView>
          <ArticleInformation>
            <Text>{formatContent(trimmedContent(article.content))}</Text>
          </ArticleInformation>
        </ScrollView>
      </ArticleDetailContainer>
    </ArticleWrapper>
  );
};

export default ArticleDetail;
