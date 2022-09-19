import styled from '@emotion/styled';

export const Ul = styled.ul`
  width: 250px;
  // border: black solid 1px;
  border-radius: 15px;
  padding: 0px;
`;

export const Li = styled.li`
  // border: black solid 1px;
  padding: 20px;
  // background-color: #e88833;
  border-radius: 15px;
  list-style-type: none;
  margin: 20px;
  font-size: 20px;
  font-weight: 800;
  color: #e88833;
  cursor: pointer;
  text-shadow: 2px 2px 2px #635f48;
  &:hover {
    box-shadow: 10px 10px 16px 3px rgba(0, 0, 0, 0.75);
  }
`;
