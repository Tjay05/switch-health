import { useRef } from 'react';
import Swiper from 'react-native-swiper';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Text from '../components/typograpghy/Text.component';

import { styled } from 'styled-components';
import Spacer from '../components/spacer/Spacer.component';
import SpecialSVG from '@/assets/icons/SpecialSVG';
import AdviceSVG from '@/assets/icons/AdviceSVG';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
`;

const Info = styled(Text)`
  align-self: flex-start;
`;

const HeadingContainer = styled(View)`
  margin-vertical: 16px;
  align-self: flex-end;
`;

const OnboardScreen = ({ navigation }) => {
  const swiperRef = useRef(null);
  const totalSlides = 2;

  const renderPagination = (index, total) => {
    const handlePress = () => {
      if (index === totalSlides - 1) {
        navigation.navigate('Main');
      } else {
        swiperRef.current.scrollBy(1);
      }
    };

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
        <TouchableOpacity 
            onPress={handlePress}
            style={styles.nextButton}
          >
            <Ionicons name='arrow-forward-circle' size={60} color='#1A1F71' />
          </TouchableOpacity>
      </View>
    );
  };

  return (
    <Container>
      <HeadingContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Text variant='place'>Skip</Text>
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
            <View style={{alignItems: 'center'}}>
              <SpecialSVG/>
            </View>
          </Spacer>
          <Spacer position='bottom' size='XXL'>
            <Info variant='main' >Find a lot of specialist doctors in one place</Info>
          </Spacer>          
        </Container>
        <Container>
          <Spacer position='bottom' size='small'>
            <View style={{alignItems: 'center'}}>
              <AdviceSVG />
            </View>
          </Spacer>
            <Info style={{position: 'absolute', bottom: 70}} variant='main' >Get advice only from a doctor you believe in.</Info>        
          <Spacer position='bottom' size='XXL'>
            <Spacer position='top' size='XXL'></Spacer>
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
  },
  nextButton: {
    position: 'absolute',
    bottom: -30,
    right: 10,
  }
})
 
export default OnboardScreen;