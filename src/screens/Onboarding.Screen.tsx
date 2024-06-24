import { useRef } from 'react';
import Swiper from 'react-native-swiper';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Text from '../components/typograpghy/Text.component';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Pic Imports
import { styled } from 'styled-components';
import Spacer from '../components/spacer/Spacer.component';
import SpecialSVG from '@/assets/icons/SpecialSVG';
import AdviceSVG from '@/assets/icons/AdviceSVG';

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
  padding-top: 16px;
  align-self: flex-end;
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
            <SpecialSVG/>
          </Spacer>
          <Spacer position='top' size='medium'/>
          <Info variant='main' >Find a lot of specialist doctors in one place</Info>
          <Spacer position='bottom' size='XXL' />
          <TouchableOpacity 
            onPress={() => swiperRef.current.scrollBy(1)}
            style={styles.nextButton}
          >
            <Ionicons name='arrow-forward-circle' size={60} color='#1A1F71' />
          </TouchableOpacity>
        </Container>
        <Container>
          <Container></Container>
          <AdviceSVG/>
          <Spacer position='bottom' size='XXL'/>
          <Spacer position='bottom' size='XXL'/>
          <Info variant='main' >Get advice only from a doctor you believe in.</Info>        
          <Spacer position='bottom' size='XXL'/>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Main')} 
            style={styles.nextButton}
          >
            <Ionicons name='arrow-forward-circle' size={60} color='#1A1F71' />
          </TouchableOpacity>
          <Spacer position='bottom' size='large'/>
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
    bottom: 3,
    right: -150,
  }
})
 
export default OnboardScreen;