import styled from 'styled-components/native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const CartList = styled.FlatList`
  padding: 0 20px;
`;

export const Product = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  elevation: 4;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 10px;
  padding: 6px 0;
`;

export const Name = styled.Text`
  margin-bottom: 4px;
  color: #0b2031;
  font-size: 12px;
  text-align: left;
  letter-spacing: 0;
`;

export const Description = styled.Text`
  margin-bottom: 4px;
  line-height: 14px;
  color: #706e7b;
  font-size: 11px;
  letter-spacing: 0;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #0b2031;
  letter-spacing: 0;
`;

export const ButtonRemove = styled.TouchableOpacity`
  padding: 5px;
  background-color: transparent;
`;

export const IconRemove = styled(MaterialIcon)`
  color: #e5293e;
`;

export const ButtonsFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ButtonFinish = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: #e6453d;
`;

export const ButtonFinishText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0;
`;

export const IconFinish = styled(MaterialIcon)`
  margin-right: -5px;
  color: #fff;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #ddd;
`;

export const IconGoBack = styled(MaterialIcon)`
  color: #666;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  width: 70px;
  margin-right: 30px;
  border-radius: 4px;
`;

export const AmountInput = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
})`
  width: 20px;
  height: 30px;
  padding: 0 5px;
  font-weight: bold;
  color: #999;
`;

export const AmountButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: transparent;
`;

export const AmountIcon = styled(MaterialIcon)`
  color: #999;
`;

export const Message = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 20%;
`;

export const MessageText = styled.Text`
  color: #0b2031;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
