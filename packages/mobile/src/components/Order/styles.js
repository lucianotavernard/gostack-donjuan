import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  justify-content: flex-start;

  margin-top: 10px;
  padding: 20px 15px;
  border-radius: 8px;
  background-color: #fff;
  elevation: 4;
`;

export const Number = styled.Text`
  color: #0b2031;
  font-size: 12px;
`;

export const TimeAgo = styled.Text`
  color: #706e7b;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0;
`;

export const Price = styled.Text`
  color: #0b2031;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
`;
