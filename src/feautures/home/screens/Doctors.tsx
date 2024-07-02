import { 
  AppContainer,
  TopDoctorsContainer,
  TouchableFlatlist
} from "../components/Home.styles";

import DocPIc from "../../../../assets/images/femaleDoc.png";
import DocPIc2 from "../../../../assets/images/doctor.png";
import { FlatList } from "react-native";
import DoctorCard from "../components/Doctor-info-card";

const DOCTORS = [
  {
    image: DocPIc,
    docName: 'Dr. Alfa',
    AOS: 'Gynaecologist',
    rating: '3.7',
    distanceAway: '800m away'
  },
  {
    image: DocPIc2,
    docName: 'Dr. Shehu',
    AOS: 'Consultant',
    rating: '2.7',
    distanceAway: '200m away'
  },
  {
    image: DocPIc,
    docName: 'Dr. Topins',
    AOS: 'Peditrician',
    rating: '1.2',
    distanceAway: '2000m away'
  },
]

const TopDoctors = ({ navigation }) => {
  return (
    <AppContainer>
      <TopDoctorsContainer>
        <FlatList
          data={DOCTORS}
          renderItem={({ item }) => {
            return (
              <TouchableFlatlist
                onPress={() => 
                  navigation.navigate('DoctorAppointment', {
                    doctor: item,
                })
                }
              >
                <DoctorCard doctor={item} />
              </TouchableFlatlist>
            )
          }}
          keyExtractor={(item) => item.docName}
        />
      </TopDoctorsContainer>
    </AppContainer>
  );
}
 
export default TopDoctors;