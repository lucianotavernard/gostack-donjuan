import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;

  margin-top: 10px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
`;

export const PhotoContainer = styled.View`
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 120px;
`;

export const Photo = styled.Image.attrs({ resizeMode: 'contain' })`
  width: ${({ size }) =>
    size === 'Pequena'
      ? '55'
      : size === 'Média'
      ? '75'
      : size === 'Grande'
      ? '95'
      : '115'}px;
  height: ${({ size }) =>
    size === 'Pequena'
      ? '55'
      : size === 'Média'
      ? '75'
      : size === 'Grande'
      ? '95'
      : '115'}px;
  margin-bottom: 15px;
  border-radius: 8px;
`;

export const Name = styled.Text`
  margin-bottom: 4px;
  color: #0b2031;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0;
`;

export const Price = styled.Text`
  color: #0b2031;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0;
  opacity: 0.6;
`;
