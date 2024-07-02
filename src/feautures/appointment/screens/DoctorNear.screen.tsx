import { LogBtn } from "../../account/components/account.styles";
import { BookBtnWrap, DocNearContainer, DocsNearBox } from "../../home/components/DocsNear.styles";
import DoctorCard from "../../home/components/Doctor-info-card";
import { Map, Search, SearchContainer } from "../../home/components/Home.styles";

const DocsNearMe = ({ route, navigation }) => {
  const { doctor } = route.params;

  return (
    <>
      <Map/>
      <SearchContainer>
        <Search
          placeholderTextColor={'#221F1F99'} 
          iconColor={'#221F1F99'}
          placeholder="Search location, ZIP code.."
        />
      </SearchContainer>
      <DocNearContainer>
        <DocsNearBox>
          <DoctorCard doctor={doctor}/>
          <BookBtnWrap
            onPress={() => {
              navigation.navigate('Book Appointment', {
                doctor
              })
            }}
          >
            <LogBtn>Book Now</LogBtn>
          </BookBtnWrap>
        </DocsNearBox>
      </DocNearContainer>
    </>
  );
}
 
export default DocsNearMe;