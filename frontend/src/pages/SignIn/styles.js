import styled from 'styled-components';

import bg from '~/assets/images/fundo.jpg';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${bg}) no-repeat;
  background-size: cover;
`;

export const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  z-index: 3;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 400px;
  z-index: 5;
`;

export const Logo = styled.img`
  align-self: center;
  width: 72px;
  margin-bottom: 30px;
  object-fit: contain;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 14px 20px;
  border: 1px solid #f5f5f5;
  border-radius: 7px;
  color: #999;
  background-color: white;
  font-size: 15px;

  &:last-of-type {
    margin-bottom: 14px;
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  padding: 14px 20px;
  border: 1px solid #e5293e;
  border-radius: 7px;
  color: white;
  background-color: #e5293e;
  font-size: 15px;
  font-weight: bold;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: rgba(229, 41, 61, 0.9);
    cursor: pointer;
  }
`;
