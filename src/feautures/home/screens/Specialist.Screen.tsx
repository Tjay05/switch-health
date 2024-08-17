import CardiologySvg from "@/assets/icons/CardioSVG";
import DentistSvg from "@/assets/icons/DentistrySVG";
import DermatologySvg from "@/assets/icons/DermaSVG";
import ENTSvg from "@/assets/icons/EntSVG";
import GastrologySvg from "@/assets/icons/GastroSVG";
import GeneralSvg from "@/assets/icons/GenSVG";
import NephrologySvg from "@/assets/icons/NephroSVG";
import NeurologySvg from "@/assets/icons/NeuroSVG";
import ObstetSvg from "@/assets/icons/ObstetSVG";
import OncologySvg from "@/assets/icons/OncoloSVG";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { SpecialistBox, SpecialistContainer, SpecialistGroup, SpecialistScroll, SpecialistType, TextCaption } from "../components/DocsNear.styles";
import { SearchInput } from "../components/Home.styles";

const SpecialistsScreen = ({ navigation }: { navigation: any }) => {
  const handleSpecialistSelect = (specialization: any) => {
    navigation.navigate('Top Doctors', { specialization });
  };

  return (
    <>
      <SpecialistContainer>
        <SpecialistScroll showsVerticalScrollIndicator={false}>
          {/* <SearchInput
            placeholder="Search doctor"
            placeholderTextColor={"#221F1F99"}
            iconColor={"#221F1F99"}
          /> */}
          <Spacer position="top" size="small">
            <Text variant='main'>Select a medical specialization</Text>
            <TextCaption>You'll be taken to a list of specialists according to your selection</TextCaption>
          </Spacer>
          <SpecialistGroup>
            <SpecialistBox onPress={() => handleSpecialistSelect('Cardiology')}>
              <CardiologySvg/>
              <SpecialistType>Cardiology</SpecialistType>
            </SpecialistBox>
            <SpecialistBox onPress={() => handleSpecialistSelect('Dermatologist')}>
              <DermatologySvg/>
              <SpecialistType>Dermatology</SpecialistType>
            </SpecialistBox>
            <SpecialistBox onPress={() => handleSpecialistSelect('Consultant')}>
              <ENTSvg/>
              <SpecialistType>Consultant</SpecialistType>
            </SpecialistBox>
            <SpecialistBox onPress={() => handleSpecialistSelect('Gastroenterologist')}>
              <GastrologySvg/>
              <SpecialistType>Gastroenterology</SpecialistType>
            </SpecialistBox>
            <SpecialistBox onPress={() => handleSpecialistSelect('Dentist')}>
              <DentistSvg/>
              <SpecialistType>Dentistry</SpecialistType>
            </SpecialistBox>
            <SpecialistBox onPress={() => handleSpecialistSelect('General Doctor')}>
              <GeneralSvg/>
              <SpecialistType>General Practitioner</SpecialistType>
            </SpecialistBox>
            <SpecialistBox onPress={() => handleSpecialistSelect('Nephrologist')}>
              <NephrologySvg/>
              <SpecialistType>Nephrology</SpecialistType>
            </SpecialistBox>
            <SpecialistBox onPress={() => handleSpecialistSelect('Neurologist')}>
              <NeurologySvg/>
              <SpecialistType>Neurology</SpecialistType>
            </SpecialistBox>
            <SpecialistBox onPress={() => handleSpecialistSelect('Gynecologist')}>
              <ObstetSvg/>
              <SpecialistType>Obstetrics & Gynecology</SpecialistType>
            </SpecialistBox>
            <SpecialistBox onPress={() => handleSpecialistSelect('Oncologist')}>
              <OncologySvg/>
              <SpecialistType>Oncology</SpecialistType>
            </SpecialistBox>
          </SpecialistGroup>
        </SpecialistScroll>
      </SpecialistContainer>
    </>
  );
}
 
export default SpecialistsScreen;