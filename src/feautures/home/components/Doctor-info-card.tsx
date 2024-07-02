import Spacer from "@/src/components/spacer/Spacer.component";
import { Ionicons } from "@expo/vector-icons";
import { DocAOS, DocCardWrapper, DocDetails, DocIMage, DocLocation, DocName, RatingText, RatingWrap } from "./Home.styles";

import DocPIc from "../../../../assets/images/femaleDoc.png";

const DoctorCard = ({ doctor = {} }) => {
  const {
    image = DocPIc,
    docName = 'Dr. Alfa',
    AOS = 'Gynaecologist',
    rating = '3.7',
    distanceAway = '800m away',
  } = doctor;

  return (
    <DocCardWrapper>
      <DocIMage source={image}/>
      <Spacer position='right' size='medium'>
        <Spacer position='right' size='small'>
        </Spacer>
      </Spacer>
      <DocDetails>
        <DocName>{docName}</DocName>
        <DocAOS>{AOS}</DocAOS>
        <RatingWrap>
          <Ionicons name="star" size={15} color={'#407CE2'} />
          <Spacer position='left' size='small'>
            <RatingText>{rating}</RatingText>
          </Spacer>
        </RatingWrap>
        <Spacer position='top' size='medium'>
          <DocLocation>{distanceAway}</DocLocation>
        </Spacer>
      </DocDetails>
    </DocCardWrapper>
  );
}
 
export default DoctorCard;