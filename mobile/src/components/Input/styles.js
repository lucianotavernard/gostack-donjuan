import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 0 15px;
  height: 46px;
  border-radius: 4px;
  background-color: #fff;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  underlineColorAndroid: 'transparent',
})`
  flex: 1;
  color: #999;
  font-size: 15px;
`;
