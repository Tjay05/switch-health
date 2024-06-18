import { Text, View, StyleSheet } from "react-native";
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
    background-color: red;
    align-items: center;
  `;

  const Paragraph = styled.Text`
    color: blue;
    width: 60%;
    margin-inline: auto;
  `;

  return (
    <Overview>
      <Paragraph>Hello world😁 Lorem ipsumm tenetur quaerat, dolorum odit nemo deleniti cum, tempore officia, voluptas illum ullam natus perferenduas ipsum veniam, at incidunt qui omnis nam voluptate iste totam?
      </Paragraph>
      <Text style={styles.box}>balablooo </Text>
    </Overview>
  );
}
