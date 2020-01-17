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

export const TypesList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
  columnWrapperStyle: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
})``;

export const ProductType = styled.TouchableOpacity`
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
`;

export const Image = styled.Image`
  width: 125px;
  height: 125px;
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
