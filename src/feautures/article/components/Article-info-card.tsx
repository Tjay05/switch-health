import Text from "@/src/components/typograpghy/Text.component";
import { 
  ArtFooter,
  ArticleCard,
  ArticleImg,
  ArticleTextWrap,
  ArticleWrapper,
  CardContainer,
  Date,
  Title
} from "./Article.styles";

import { Ionicons } from "@expo/vector-icons";
import DocImg from "../../../../assets/images/doctor.png";

const ArticleInfo = ({ article ={} }) => {
  const {
    image = DocImg,
    title = "Dental Health a Part to Success",
    date = "Ju1 10, 2023",
    readTime = "5min read",
  } = article;

  return (  
    <ArticleWrapper>
      <ArticleCard>
        <CardContainer>
          <ArticleImg source={image}/>
          <ArticleTextWrap>
            <Title>{title}</Title>
            <ArtFooter>
              <Date>{date}</Date>
              <Date>{readTime}</Date>
            </ArtFooter>
          </ArticleTextWrap>
        </CardContainer>
        <Ionicons name="bookmark-outline" size={20} color='#407CE2' />
      </ArticleCard>
    </ArticleWrapper>
  );
}
 
export default ArticleInfo;