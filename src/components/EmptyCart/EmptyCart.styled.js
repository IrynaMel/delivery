import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 160px;
  height: 50px;
  border-radius: 15px;
  background-color: #e88833;
  font-weight: 700;
  text-decoration: none;
  color: white;
`;
