import Text from "@/src/components/typograpghy/Text.component";
import { 
  AppContainer,
  DocAOS,
  DocDetails,
  DocIMage,
  DocLocation,
  DocName,
  DoctorWraapper, 
  RatingText, 
  RatingWrap, 
  TopDoctorsContainer,
  TouchableArticle
} from "../components/Home.styles";

import DocPIc from "../../../../assets/images/femaleDoc.png";
import Spacer from "@/src/components/spacer/Spacer.component";
import { Ionicons } from "@expo/vector-icons";

const TopDoctors = () => {
  return (
    <DoctorWraapper>
      <AppContainer>
        <TopDoctorsContainer>
          <TouchableArticle>
            <DocIMage source={DocPIc}/>
            <Spacer position='right' size='medium'>
              <Spacer position='right' size='small'>

              </Spacer>
            </Spacer>
            <DocDetails>
              <DocName>Dr. Nallarasi</DocName>
              <DocAOS>Orthopaedic</DocAOS>
              <RatingWrap>
                <Ionicons name="star" size={15} color={'#407CE2'} />
                <Spacer position='left' size='small'>
                  <RatingText>4.7</RatingText>
                </Spacer>
              </RatingWrap>
              <Spacer position='top' size='medium'>
                <DocLocation>800m away</DocLocation>
              </Spacer>
            </DocDetails>
          </TouchableArticle>
          <TouchableArticle>
            <DocIMage source={DocPIc}/>
            <Spacer position='right' size='medium'>
              <Spacer position='right' size='small'>

              </Spacer>
            </Spacer>
            <DocDetails>
              <DocName>Dr. Shafar Abdullahi</DocName>
              <DocAOS>Gynaecologist</DocAOS>
              <RatingWrap>
                <Ionicons name="star" size={15} color={'#407CE2'} />
                <Spacer position='left' size='small'>
                  <RatingText>3.7</RatingText>
                </Spacer>
              </RatingWrap>
              <Spacer position='top' size='medium'>
                <DocLocation>800m away</DocLocation>
              </Spacer>
            </DocDetails>
          </TouchableArticle>
        </TopDoctorsContainer>
      </AppContainer>
    </DoctorWraapper>
  );
}
 
export default TopDoctors;