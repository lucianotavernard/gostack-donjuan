import styled from 'styled-components';

import { IoMdAppstore } from 'react-icons/io';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #0b2031;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-name {
    margin-left: 14px;
    color: white;
    font-size: 18px;
  }
`;

export const UserOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  position: relative;
  margin-right: 20px;
  padding-right: 20px;
  color: white;
  font-size: 18px;
  text-align: right;

  &:after {
    content: '';
    position: absolute;
    bottom: 10%;
    right: 0;
    width: 1px;
    height: 80%;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .username {
    color: white;
    font-size: 16px;
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  color: white;
  background: 0;
  font-size: 14px;
  text-decoration: none;
  opacity: 0.6;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Cart = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e5293e;

  img {
    width: 20px;
    color: white;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #f6c008;
  }
`;

export const Icon = styled(IoMdAppstore)`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
`;
