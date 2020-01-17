import styled, { css } from 'styled-components/native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

export const Container = styled.View`
  padding: 10px 20px;
  /* background-color: #0b2031; */

  flex-direction: row;
  align-items: center;
  justify-content: ${({ hasGoBack }) => (hasGoBack ? 'flex-start' : 'space-between')};
  z-index: 1;
`;

export const LeftButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const Icon = styled(MaterialIcon).attrs({
  color: '#fff',
})``;

export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;

  ${props => props.leftInfo
    && css`
      margin-left: auto;
    `}
`;

export const CartButton = styled.TouchableOpacity`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background-color: #e5293e;
`;

export const CartInfo = styled.View`
  position: absolute;
  top: 0;
  right: -3px;
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: #f6c008;
`;

export const CartIcon = styled(SimpleLineIcon).attrs({
  color: '#fff',
})`
  margin-top: -5px;
`;
