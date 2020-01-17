import styled from 'styled-components/native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Content = styled.View`
  padding: 20px 20px 0;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  width: ${({ width }) => width || 100}%;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  color: #999;
  background-color: #fff;
  font-size: 15px;
  elevation: 4;
`;

export const ButtonsFooter = styled.View`
  flex-direction: row;
  justify-content: flex-end;
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
