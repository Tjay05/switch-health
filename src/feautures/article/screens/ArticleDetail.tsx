import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import {
  ArticleDate, 
  ArticleDetailContainer, 
  ArticleDetailImg, 
  ArticleHead, 
  ArticleImg, 
  ArticleInformation, 
  ArticleWrapper, 
  AuthorContainer,
  AuthorImg,
  AuthorName
} from "../components/Article.styles";

const ArticleDetail = ({ route }) => {
  const { article } = route.params;

  return ( 
    <ArticleWrapper>
      <ArticleDetailContainer showsVerticalScrollIndicator={false}>
        <ArticleHead variant='main'>{article.title}</ArticleHead>
        <ArticleDate>{article.date}</ArticleDate>
        <Spacer position="bottom" size="medium">
          <AuthorContainer>
            <AuthorImg source={article.authorPic} />
            <AuthorName>{article.author}</AuthorName>
          </AuthorContainer>
        </Spacer>
        <Spacer position="bottom" size="XXL">
          <ArticleDetailImg source={article.image} />
        </Spacer>
        <ArticleInformation>{article.info}</ArticleInformation>
      </ArticleDetailContainer>
    </ArticleWrapper>
  );
}
 
export default ArticleDetail;