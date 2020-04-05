import styled from 'styled-components';
import { darken } from 'polished';

import bg from '~/assets/images/fundo.jpg';

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent),
    url(${bg}) no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    z-index: 5;

    img {
      align-self: center;
      width: 72px;
      margin-bottom: 30px;
      object-fit: contain;
    }

    input {
      height: 44px;
      margin: 0 0 10px;
      padding: 0 15px;
      border: 0;
      border-radius: 4px;
      color: #999;
      background-color: white;
      font-size: 15px;

      &:last-of-type {
        margin-bottom: 14px;
      }
    }

    span {
      align-self: flex-start;
      margin: 0 0 10px;
      color: #fb6f91;
      font-weight: bold;
    }

    button {
      height: 44px;
      margin: 5px 0 0;
      border: 0;
      border-radius: 4px;
      color: white;
      background-color: #e5293e;
      font-size: 16px;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#e5293e')};
        cursor: pointer;
      }
    }
  }
`;
