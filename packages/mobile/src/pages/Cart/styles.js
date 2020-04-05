import styled from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const CartList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
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

export const IconFinish = styled(MaterialIcons)`
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

export const IconGoBack = styled(MaterialIcons)`
  color: #666;
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
