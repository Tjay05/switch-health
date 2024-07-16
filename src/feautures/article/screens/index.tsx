import { FlatList } from "react-native";
import DocImg from "../../../../assets/images/doctor.png";
import CovidImg from "../../../../assets/images/covid.png";
import LawImg from "../../../../assets/images/law.png";
import { TouchableFlatlist } from "../../home/components/Home.styles";
import ArticleInfo from "../components/Article-info-card";
import { Articlecontainer, ArticleWrapper } from "../components/Article.styles";
import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import Loading from "@/src/components/loader";

const ARTICLES = [
  // {
  //   image:
  //     "https://res.cloudinary.com/dba1aezsn/image/upload/v1720013159/Lady_Health_Justice_-_Healthcare_should_be_like_u4mo2q.jpg",
  //   title: "Health and Law",
  //   createdAt: "2024-07-03T13:31:48.919Z",
  //   avatar:
  //     "https://res.cloudinary.com/dba1aezsn/image/upload/v1720013199/pic_1_sox5mu.jpg",
  //   fullName: "Angel Ugochukwu",
  //   readTime: "5 minutes read",
  //   content: `Health and law intersect in numerous ways, encompassing the regulation of healthcare practices, the protection of patient rights, and the formulation of public health policies. Health law governs the administration of healthcare services, ensuring quality standards and ethical practices among providers. It includes laws on medical malpractice, patient confidentiality, informed consent, and the licensing of healthcare professionals. <br> Public health law focuses on the legal frameworks that enable governments to manage and prevent disease outbreaks, promote healthy behaviors, and ensure access to healthcare. This includes legislation on vaccination mandates, smoking bans, and regulations to control the spread of infectious diseases. <br> Additionally, health law addresses issues of healthcare accessibility and equity, aiming to reduce disparities and ensure that all individuals receive adequate care regardless of their socioeconomic status. It also encompasses bioethics, which deals with the moral implications of medical advancements and technologies, such as genetic testing and end-of-life care. <br> Overall, the field of health law is crucial in maintaining the integrity of healthcare systems, protecting patient rights, and promoting public health and safety.
  //   `,
  // },
];

const ArticleScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

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
      } else {
        // console.error("Failed to fetch profile data:", response.statusText);
      }
    } catch (error) {
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

  return (
    <ArticleWrapper>
      {isLoading && <Loading />}
      <Articlecontainer>
        <FlatList
          data={articles.length ? articles : ARTICLES}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableFlatlist
                onPress={() =>
                  navigation.navigate("Article Detail", {
                    article: item,
                  })
                }
              >
                <ArticleInfo article={item} />
              </TouchableFlatlist>
            );
          }}
          keyExtractor={(item) => item.title}
        />
      </Articlecontainer>
    </ArticleWrapper>
  );
};

export default ArticleScreen;
