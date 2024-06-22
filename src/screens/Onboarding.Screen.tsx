import { useRef } from "react";
import Swiper from "react-native-swiper";
import { Image, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Text from "../components/typograpghy/Text.component";
import { TouchableOpacity } from "react-native-gesture-handler";

// Pic Imports
import FindSpecImg from "../../assets/images/findSpecialist.png";
import getAdviceImg from "../../assets/images/getAdvice.png";
import { styled } from "styled-components";
import Spacer from "../components/spacer/Spacer.component";

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const Info = styled(Text)`
  align-self: flex-start;
  text-align: center;
`;

const HeadingContainer = styled(View)`
  padding-top: 16px;
  align-self: flex-end;
`;

const OnboardScreen = ({ navigation }) => {
  const swiperRef = useRef(null);

  const renderPagination = (index, total) => {
    return (
      <View style={styles.paginationContainer}>
        {Array.from({ length: total }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationRectangle,
              i === index ? styles.activePaginationRectangle : null,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <Container>
      <HeadingContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text variant="place">Skip</Text>
        </TouchableOpacity>
      </HeadingContainer>
      <Swiper
        showsButtons={false}
        loop={false}
        ref={swiperRef}
        renderPagination={renderPagination}
      >
        <View style={styles.slideContainer}>
          <Spacer position="bottom" size="small">
            <Image source={FindSpecImg} />
          </Spacer>
          <Spacer position="top" size="medium" />
          <Info variant="main">
            Find a lot of specialist doctors in one place
          </Info>
          <Spacer position="bottom" size="XXL" />
          <View style={styles.navigationContainer}>
            <View style={styles.paginationWrapper}>{renderPagination()}</View>
            <TouchableOpacity
              onPress={() => swiperRef.current.scrollBy(1)}
              style={styles.nextButton}
            >
              <Ionicons name="arrow-forward-circle" size={60} color="#1A1F71" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.slideContainer}>
          <Spacer position="bottom" size="large">
            <Image source={getAdviceImg} />
          </Spacer>
          <Spacer position="top" size="medium" />
          <Info variant="main">
            Get advice only from a doctor you believe in.
          </Info>
          <Spacer position="bottom" size="XXL" />
          <View style={styles.navigationContainer}>
            <View style={styles.paginationWrapper}>{renderPagination()}</View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Main")}
              style={styles.nextButton}
            >
              <Ionicons name="arrow-forward-circle" size={60} color="#1A1F71" />
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    </Container>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40, 
  },
  paginationWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  paginationRectangle: {
    width: 15,
    height: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 2,
    borderRadius: 3,
  },
  activePaginationRectangle: {
    backgroundColor: "#2178EA",
  },
  navigationContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    paddingHorizontal: 20,
  },
  nextButton: {
    flex: 1,
    alignItems: "flex-end",
  },
  slideContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
});

export default OnboardScreen;
