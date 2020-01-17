import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  max-width: 840px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

export const SaleList = styled.section`
  margin-top: 25px;
`;

export const Sale = styled.article`
  margin-top: 10px;
  padding: 20px;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  background-color: white;

  -webkit-box-shadow: 0px 0px 10px 5px rgba(242, 242, 242, 1);
  -moz-box-shadow: 0px 0px 10px 5px rgba(242, 242, 242, 1);
  box-shadow: 0px 0px 10px 5px rgba(242, 242, 242, 1);

  header {
    display: flex;
    flex-direction: column;

    h4 {
      margin-bottom: 5px;
      color: #0b2031;
      font-size: 18px;
      font-weight: normal;
    }

    time {
      margin-bottom: 5px;
      line-height: 14px;
      color: #706e7b;
      font-size: 11px;
      text-align: left;
    }

    strong {
      color: #0b2031;
      font-size: 16px;
    }
  }

  section {
    display: flex;
    flex-wrap: wrap;

    margin: 15px 0;
    padding: 15px 0;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;

    > article {
      display: flex;
      align-items: center;

      min-width: 220px;
      padding: 8px 16px;
      border: 1px solid #f2f2f2;
      border-radius: 8px;

      &:not(:last-of-type) {
        margin-right: 20px;
      }

      img {
        width: 60px;
        margin-right: 10px;
        object-fit: contain;
      }

      > div {
        line-height: 10.77px;
        color: #706e7b;
        font-size: 11px;
        text-align: left;
      }
    }
  }

  footer {
    color: #706e7b;
    font-size: 14px;
  }
`;
