import styled from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  elevation: 4;
`;

export const Photo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const Info = styled.View`
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

export const TimeIcon = styled(MaterialIcons).attrs({ color: '#706e7b' })`
  margin-right: 5px;
  opacity: 0.3;
`;

export const TimeDescription = styled.Text`
  color: #706e7b;
  font-size: 11px;
  letter-spacing: 0.46px;
`;
