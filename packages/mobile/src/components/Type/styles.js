import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;

  margin-top: 10px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
`;

export const Photo = styled.Image`
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
