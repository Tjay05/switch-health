import Text from "@/src/components/typograpghy/Text.component";
import { 
  DrugImage,
  DrugName,
  ItemBox,
  ItemInfo,
  PharmacyContainer, 
  PharmacyWrapper, 
  PriceTag, 
  PriceWrap,
  RateWrap
} from "../components/Pharmacy.styles";

import DrugPic from '../../../../assets/images/drugbox.png';
import { Ionicons } from "@expo/vector-icons";

const PharmacyScreen = ({ navigation }) => {
  const DRUGS = [
    {
      name: 'OBH combi',
      image: DrugPic,
      price: 'N 1000',
      rating: '4.0',
      quantity: '7.5ml',
      description: 'OBH COMBI  is a cough medicine containing, Paracetamol, Ephedrine HCl, and Chlorphenamine maleate which is used to relieve coughs accompanied by flu symptoms such as fever, headache, and sneezing',
    },
    {
      name: 'Ampliclox',
      image: DrugPic,
      price: 'N 100',
      rating: '5.0',
      quantity: '17.5ml',
      description: 'OBH COMBI  is a cough medicine containing, Paracetamol, Ephedrine HCl, and Chlorphenamine maleate which is used to relieve coughs accompanied by flu symptoms such as fever, headache, and sneezing',
    },
    {
      name: 'Vit. C',
      image: DrugPic,
      price: 'N 100',
      rating: '2.0',
      quantity: '20ml',
      description: 'OBH COMBI  is a cough medicine containing, Paracetamol, Ephedrine HCl, and Chlorphenamine maleate which is used to relieve coughs accompanied by flu symptoms such as fever, headache, and sneezing',
    },
  ]

  return (
    <PharmacyWrapper showsVerticalScrollIndicator={false}>
      <PharmacyContainer>
        {DRUGS.map((item) => (
          <ItemBox 
            key={item.name} 
            onPress={() => 
              navigation.navigate('Pharmacy Details', {
                drug: item,
              })}
          >
            <DrugImage source={item.image} />
            <ItemInfo>
              <DrugName>{ item.name }</DrugName>
              <PriceWrap>
                <PriceTag>{ item.price }</PriceTag>
                <RateWrap>
                  <Ionicons name="star" size={12} color='#1A1F71' />
                  <PriceTag>{ item.rating }</PriceTag>
                </RateWrap>
              </PriceWrap>
            </ItemInfo>
          </ItemBox>
        ))}
      </PharmacyContainer>
    </PharmacyWrapper>
  );
}
 
export default PharmacyScreen;