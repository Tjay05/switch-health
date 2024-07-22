import Text from "@/src/components/typograpghy/Text.component";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { styled } from "styled-components";

const CartIcon = ({ navigation }: { navigation: any }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const currentCart = await AsyncStorage.getItem('cart');
        setCart(currentCart ? JSON.parse(currentCart) : []);
      } catch (error) {
        console.error("Failed to fetch cart", error);
      }
    };
    fetchCart();
  }, []);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={{ marginRight: 16 }}
    >
      <Ionicons name="cart-outline" size={27} color='black' />
      <Counter>{cart.length}</Counter>
    </TouchableOpacity>
  );
}

const Counter = styled(Text)`
  position: absolute;
  top: -6px;
  right: -8px;
  padding-vertical: 2.5px;
  padding-horizontal: 6px;
  background-color: red;
  border-radius: 100px;
  color: white;
  font-size: 8px;
`;
 
export default CartIcon;