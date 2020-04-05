import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { Form as Unform } from '@unform/mobile';
import { LinearGradient } from 'expo-linear-gradient';

import background from '~/assets/images/background.png';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Background = styled.ImageBackground.attrs({
  source: background,
  resizeMode: 'cover',
})`
  flex: 1;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['transparent', 'black'],
})`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const Image = styled.Image`
  width: 72px;
  height: 72px;
  margin-bottom: 33px;
`;

export const Form = styled(Unform)`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)``;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: transparent;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
