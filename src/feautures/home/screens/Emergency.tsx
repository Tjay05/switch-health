import { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import * as Location from 'expo-location';
import { Marker } from "react-native-maps";

import Spacer from "@/src/components/spacer/Spacer.component";
import { LogBtn } from "../../account/components/account.styles";
import { 
  AddressBox,
  AddressBoxwrap,
  AddressText,
  AddressWrap,
  ConfirmBtnWrap,
  ConfirmText,
  Map, 
  Search,
  SearchContainer
} from "../components/Home.styles";

const Emergency = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('Fetching your location...');
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setAddress('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });

      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      let currentAddress = reverseGeocode[0];
      setAddress(`${currentAddress.name}, ${currentAddress.street}, ${currentAddress.city}, ${currentAddress.region}, ${currentAddress.postalCode}`);
    })();
  }, []);

  return (
    <>
      <Map
        region={region}
        showsUserLocation
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="My Location"
          />
        )}
      </Map>
      <SearchContainer>
        <Search
          placeholderTextColor={'#221F1F99'} 
          iconColor={'#221F1F99'}
          placeholder="Search location, ZIP code.."
        />
      </SearchContainer>
      <AddressBoxwrap>
        <AddressBox>
          <ConfirmText>Confirm your address</ConfirmText>
          <AddressWrap>
            <Spacer position="top" size="large">
              <Ionicons name="location" size={23} color={'red'} />
            </Spacer>
            <AddressText>{address}</AddressText>
          </AddressWrap>
          <ConfirmBtnWrap>
            <TouchableOpacity onPress={() => navigation.navigate('Ambulance')}>
              <LogBtn>Confirm Location</LogBtn>
            </TouchableOpacity>
          </ConfirmBtnWrap>
        </AddressBox>
      </AddressBoxwrap>
    </>
  );
}

export default Emergency;