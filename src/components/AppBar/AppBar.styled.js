import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1290px;
  height: 100vh;
  margin: 0 auto;
`;

export const Header = styled.header`
  // max-width: 1500px;
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // margin-left: 150px;
  // margin-right: 30px;
`;

export const HLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 12px;
  max-height: 35px;
  width: 100px;
  margin-right: 50px;
  font-weight: 500;
  color: #e88833;
  font-size: 20px;
  border-radius: 10px;
  text-shadow: 2px 2px 2px #635f48;
  // &.active {
  //   color: #e88833;
  //   text-decoration: underline;
  //   // box-shadow: 10px 10px 16px 3px rgba(0, 0, 0, 0.75);
  // }
  &:hover {
    box-shadow: 10px 10px 16px 3px rgba(0, 0, 0, 0.75);
  }
`;
export const Name = styled.p`
  margin: 0px 20px;
  padding: 12px;
  font-weight: 800;
  font-size: 20px;
`;

export const H = styled.h1`
  text-align: center;
  margin-top: 30px;
  font-family: cursive;
  font-size: 68px;
  font-weight: 1000;
  color: rgb(130, 106, 198);
  text-shadow: 4px 2px 2px #635f48;
`;

export const Img = styled.img`
  width: 160px;
  margin-left: 50px;
`;
export const CartImg = styled.img`
  margin-right: 5px;
  margin-left: 5px;
`;
