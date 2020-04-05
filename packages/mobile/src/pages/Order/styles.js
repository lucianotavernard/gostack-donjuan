import styled from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Content = styled.View`
  padding: 20px 20px 0;
`;

export const FormGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FormInput = styled(Input)``;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 5px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const CreateOrderButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: #e6453d;
`;

export const CreateOrderButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0;
`;

export const CreateOrderButtonIcon = styled(MaterialIcons).attrs({
  size: 18,
})`
  margin-right: -5px;
  color: #fff;
`;
