import { useEffect, useState } from "react";
import { LogBtn } from "../../account/components/account.styles";
import {
  BookBtnWrap,
  DocNearContainer,
  DocsNearBox,
} from "../../home/components/DocsNear.styles";
import DoctorCard from "../../home/components/Doctor-info-card";
import {
  Map,
  Search,
  SearchContainer,
} from "../../home/components/Home.styles";
import * as Location from "expo-location";
import { Alert } from "react-native";
import { Marker } from "react-native-maps";

const DocsNearMe = ({ route, navigation }) => {
  // const [location, setLocation] = useState(null);
  const { doctor } = route.params;
  // const [region, setRegion] = useState({
  //   latitude: 37.78825,
  //   longitude: -122.4324,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  // });
  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       Alert.alert("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //     setRegion({
  //       latitude: location.coords.latitude,
  //       longitude: location.coords.longitude,
  //       latitudeDelta: 0.005,
  //       longitudeDelta: 0.005,
  //     });
  //   })();
  // }, []);
  return (
    <>
      <Map 
        // region={region} showsUserLocation
      >
        {/* {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="My Location"
          />
        )} */}
      </Map>
      <SearchContainer>
        <Search
          placeholderTextColor={"#221F1F99"}
          iconColor={"#221F1F99"}
          placeholder="Search location, ZIP code.."
        />
      </SearchContainer>
      <DocNearContainer>
        <DocsNearBox>
          <DoctorCard doctor={doctor} />
          <BookBtnWrap
            onPress={() => {
              navigation.navigate("Book Appointment", {
                doctor,
              });
            }}
          >
            <LogBtn>Book Now</LogBtn>
          </BookBtnWrap>
        </DocsNearBox>
      </DocNearContainer>
    </>
  );
};

export default DocsNearMe;
