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

export const SizesList = styled.FlatList.attrs({
  numColumns: 2,
  contentContainerStyle: {
    paddingBottom: 30,
  },
  columnWrapperStyle: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
})``;

export const Empty = styled.Text`
  margin-top: 50%;
  color: #fff;
  font-size: 15px;
  text-align: center;
`;
