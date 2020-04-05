import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: ${({ size }) => size}%;

  height: 46px;
  margin: 0 0 10px;
  padding: 0 15px;
  border-radius: 4px;
  background-color: #fff;

  ${({ multiline }) =>
    multiline &&
    css`
      align-items: flex-start;
      height: 120px;
      padding: 15px;
    `}
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  underlineColorAndroid: 'transparent',
})`
  flex: 1;
  color: #999;
  font-size: 15px;
`;
