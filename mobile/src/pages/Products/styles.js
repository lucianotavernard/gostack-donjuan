import styled, { css } from 'styled-components/native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;

  ${props => props.loading
    && css`
      justify-content: center;
      align-items: center;
    `}
`;

export const ProductsList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
})``;

export const Product = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  elevation: 4;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 6px 0;
`;

export const Name = styled.Text`
  margin-bottom: 4px;
  color: #0b2031;
  font-size: 14px;
  text-align: left;
  letter-spacing: 0;
`;

export const Description = styled.Text`
  margin-bottom: 3px;
  line-height: 14px;
  color: #706e7b;
  font-size: 11px;
  letter-spacing: 0;
`;

export const Time = styled.View`
  flex-direction: row;
`;

export const TimeIcon = styled(MaterialIcon).attrs({ color: '#706e7b' })`
  margin-right: 5px;
  opacity: 0.3;
`;

export const TimeDescription = styled.Text`
  color: #706e7b;
  font-size: 11px;
  letter-spacing: 0.46px;
`;
