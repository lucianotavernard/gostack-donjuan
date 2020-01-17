import { Platform } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Background = styled.ImageBackground.attrs({ resizeMode: 'cover' })`
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
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const Image = styled.Image`
  width: 72px;
  height: 72px;
  margin-bottom: 33px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
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
