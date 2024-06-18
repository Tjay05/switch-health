import { Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { styled } from "styled-components";

export default function Index() {
  const styles = StyleSheet.create({
    box: {
      // flex: 1, 
      color: '#ffffff',
      textAlign: 'left',
      textDecorationLine: 'underline line-through'  
    }
  })

  const Overview = styled.View`
    flex: 1;
    justify-content: center;
    background-color: #ffffff;
    align-items: center;
  `;

  const Paragraph = styled.Text`
    color: blue;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  `;

  return (
    <Overview>
      <SafeAreaView>
        <ScrollView>

        <Paragraph>
          Lorem ipsum dolortationem id obcaecati, fugiat quo rerum recusandae quisquam distinctio maiores veniam nihil asperiores doloribus adipisci tempore similique nesciunt totam placeat atque fuga? Sunt volhic vel rem aliquid quia. Ratione odio deleniti rerum voluptates dolorum, illo expedita! Neque ex voluptatibus quis aliquam doloribus rerum natus, similique porro harum laborum aut accusamus dolore voluptates dolorem vero mollitia dolorum optio, adipisci quo corrupti?
        </Paragraph>
        <Paragraph>Helo</Paragraph>
        </ScrollView>
      </SafeAreaView>
    </Overview>
  );
}
