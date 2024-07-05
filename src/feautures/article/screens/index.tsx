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

const ARTICLES = [
  {
    image: "https://res.cloudinary.com/dba1aezsn/image/upload/v1720109527/24_Secrets_Pain_Doctors_Won_t_Tell_You_aiwlxf.jpg",
    title: "The 25 Healthiest Fruits You Can Eat, According to a Nutritionist",
    date: "Jun 10, 2024",
    avatar: "https://res.cloudinary.com/dba1aezsn/image/upload/v1709376574/Blog%20Images/qy1ieqnhlt2gr6zffcih.jpg",
    fullName: "Popins Shallom",
    readTime: "3min read",
    content: `Dental health is a vital component of overall success, influencing multiple facets of life. Proper oral hygiene practices, such as regular brushing, flossing, and dental check-ups, help prevent common dental issues like cavities, gum disease, and bad breath. These problems, if left unchecked, can lead to more severe health complications and negatively affect one's self-esteem and social interactions. 
    
    A healthy, bright smile contributes significantly to making positive first impressions, which are crucial in both personal and professional contexts. In the workplace, a confident smile can enhance communication skills, foster better relationships with colleagues and clients, and even improve job prospects. People who maintain good dental health are often perceived as more attractive, confident, and approachable. 
    
    Moreover, dental health is closely linked to overall physical health. Poor oral hygiene can lead to serious health issues such as cardiovascular disease, diabetes, and respiratory infections. By taking care of one's teeth and gums, individuals can reduce the risk of these systemic health problems, promoting overall well-being and productivity. 
    
    Investing in dental health also underscores the importance of self-care and discipline. Regular dental visits and good oral hygiene practices reflect a commitment to personal health and well-being. This discipline can translate into other areas of life, contributing to academic, professional, and personal achievements. 
    
    In summary, dental health is not just about maintaining a beautiful smile; it is integral to overall health and success. Prioritizing oral hygiene can enhance self-confidence, improve social and professional relationships, and prevent serious health issues, ultimately supporting a more successful and fulfilling life.
    `,
  },
  {
    image: "https://res.cloudinary.com/dba1aezsn/image/upload/v1720109527/24_Secrets_Pain_Doctors_Won_t_Tell_You_aiwlxf.jpg",
    title: "Dental Health a Part to Success",
    date: "Apr 10, 2024",
    avatar: "https://res.cloudinary.com/dba1aezsn/image/upload/v1709376574/Blog%20Images/qy1ieqnhlt2gr6zffcih.jpg",
    fullName: "Steph Baby",
    readTime: "15min read",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum cupiditate ipsa assumenda quae illo doloremque voluptate in! 
    
    Atque nemo commodi enim. Quos, eaque est blanditiis sed sit non, illo omnis labore molestiae libero quis sunt! Ducimus obcaecati ex, magnam quidem laborum reprehenderit incidunt quam ut quia quasi id distinctio nulla.
    `,
  },
  {
    image: "https://res.cloudinary.com/dba1aezsn/image/upload/v1720109527/24_Secrets_Pain_Doctors_Won_t_Tell_You_aiwlxf.jpg",
    title: "Health and Law",
    date: "Aug 9, 2023",
    avatar: "https://res.cloudinary.com/dba1aezsn/image/upload/v1709376574/Blog%20Images/qy1ieqnhlt2gr6zffcih.jpg",
    fullName: "Tjayy",
    readTime: "2min read",
    content: `Health and law intersect in numerous ways, encompassing the regulation of healthcare practices, the protection of patient rights, and the formulation of public health policies. Health law governs the administration of healthcare services, ensuring quality standards and ethical practices among providers. It includes laws on medical malpractice, patient confidentiality, informed consent, and the licensing of healthcare professionals. 
    
    Public health law focuses on the legal frameworks that enable governments to manage and prevent disease outbreaks, promote healthy behaviors, and ensure access to healthcare. This includes legislation on vaccination mandates, smoking bans, and regulations to control the spread of infectious diseases. 
    
    Additionally, health law addresses issues of healthcare accessibility and equity, aiming to reduce disparities and ensure that all individuals receive adequate care regardless of their socioeconomic status. It also encompasses bioethics, which deals with the moral implications of medical advancements and technologies, such as genetic testing and end-of-life care. 
    
    Overall, the field of health law is crucial in maintaining the integrity of healthcare systems, protecting patient rights, and promoting public health and safety.
    `,
  },
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
