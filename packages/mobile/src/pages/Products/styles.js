import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;

  ${(props) =>
    props.loading &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export const ProductsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
})``;

export const Empty = styled.Text`
  margin-top: 50%;
  color: #fff;
  font-size: 15px;
  text-align: center;
`;
