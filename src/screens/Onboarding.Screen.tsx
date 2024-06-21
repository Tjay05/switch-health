import { useRef } from 'react';
import Swiper from 'react-native-swiper';
import { Image, View, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Text from '../components/typograpghy/Text.component';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Pic Imports
import FindSpecImg from '../../assets/images/findSpecialist.png';
import getAdviceImg from '../../assets/images/getAdvice.png';
import { styled } from 'styled-components';
import Spacer from '../components/spacer/Spacer.component';

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
`;

const HeadingContainer = styled(View)`
  align-self: flex-start;
`;

const OnboardScreen = ({ navigation }) => {
  const swiperRef = useRef(null);

  const renderPagination = (index, total) => {
    return (
      <View style={styles.paginationContainer}>
        {Array.from({ length:total }).map((_, i) => (
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
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Text>Skip</Text>
        </TouchableOpacity>
      </HeadingContainer>
      <Swiper 
        showsButtons={false} 
        loop={false}
        ref={swiperRef}
        renderPagination={renderPagination}
      >
        <Container>
          <Spacer position='bottom' size='small'>
            <Image source={FindSpecImg} />
          </Spacer>
          <Spacer position='top' size='medium'/>
          <Info variant='main' >Find a lot of specialist doctors in one place</Info>
        </Container>
        <Container>
          <Spacer position='bottom' size='XXL'>
            <Image source={getAdviceImg} />
          </Spacer>
          <Spacer position='bottom' size='XXL'/>
          <Spacer position='bottom' size='extraLarge'/>
          <Info variant='main' >Get advice only from a doctor you believe in.</Info>        
          <Spacer position='top' size='extraLarge'>
            <Button title='Start' onPress={() => navigation.navigate('Main')} />
          </Spacer>
        </Container>
      </Swiper>
    </Container>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: 50,
    left: -250,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationRectangle: {
    width: 15,
    height: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 2,
    borderRadius: 3,
  },
  activePaginationRectangle: {
    backgroundColor: '#2178EA'
  }
})
 
export default OnboardScreen;