import { useState } from "react";

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
import { TouchableOpacity } from "react-native";

const ArticleInfo = ({ article ={} }) => {
  const [bookmarks, setBookmarks] = useState({});

  const {
    image = DocImg,
    title = "Dental Health a Part to Success",
    date = "Ju1 10, 2023",
    readTime = "5min read",
  } = article;

  const toggleBookmark = (title) => {
    setBookmarks((prevBookmarks) => ({
      ...prevBookmarks,
      [title]: !prevBookmarks[title],
    }));
  };

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
}
 
export default ArticleInfo;