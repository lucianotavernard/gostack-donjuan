import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;

  ${props => props.loading
    && css`
      justify-content: center;
      align-items: center;
    `}
`;

export const SizesList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
  columnWrapperStyle: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
})``;

export const ProductSize = styled.TouchableOpacity.attrs({})`
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 210px;
  margin-top: 10px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
`;

export const ImageBox = styled.View`
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
`;

export const Image = styled.Image.attrs({ resizeMode: 'contain' })`
  width: ${({ size }) => (size === 'Pequena' ? '55' : size === 'Média' ? '75' : size === 'Grande' ? '95' : '115')}px;
  height: ${({ size }) => (size === 'Pequena' ? '55' : size === 'Média' ? '75' : size === 'Grande' ? '95' : '115')}px;
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
