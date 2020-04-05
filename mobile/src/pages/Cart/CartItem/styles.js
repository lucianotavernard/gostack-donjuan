import styled from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
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
  color: #706e7b;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0;
`;

export const Price = styled.Text`
  color: #0b2031;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
`;

export const ButtonRemove = styled.TouchableOpacity`
  padding: 5px;
  background-color: transparent;
`;

export const IconRemove = styled(MaterialIcons)`
  color: #e5293e;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  width: 70px;
  margin-right: 30px;
  border-radius: 4px;
`;

export const AmountInput = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  editable: false,
  maxLength: 2,
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

export const AmountIcon = styled(MaterialIcons)`
  color: #999;
`;
