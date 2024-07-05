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
import DocImg from "../../../../assets/images/doctor.png";

const ArticleInfo = ({ article = {} }) => {
  const {
    image = "https://res.cloudinary.com/dba1aezsn/image/upload/v1720109527/24_Secrets_Pain_Doctors_Won_t_Tell_You_aiwlxf.jpg",
    title = "Dental Health a Part to Success",
    createdAt = "2024-07-04T16:34:44.298+00:00",
    readTime = "5min read",
  } = article;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
        <Ionicons name="bookmark-outline" size={20} color="#407CE2" />
      </ArticleCard>
    </ArticleWrapper>
  );
};

export default ArticleInfo;
