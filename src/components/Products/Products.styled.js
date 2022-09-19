import styled from '@emotion/styled';

export const Ul = styled.ul`
  // border: black solid 1px;
  // border-radius: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 50px;
  margin-right: 30px;
  max-height: 650px;
  overflow-y: scroll;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.35);
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #d0a686;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: #7b7169;
    border-radius: 20px;
  }
`;

export const Li = styled.li`
  margin: 30px;
  width: 150px;
  max-height: 350px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.35);
  // border: black solid 1px;
  padding: 15px;
  border-radius: 5px 15px;
  list-style-type: none;
  background-color: rgba(0, 0, 0, 0.25);
  &:hover {
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.55);
  }
`;

export const Button = styled.button`
  margin: 15px 5px 0px 45px;
  border-radius: 5px;
  color: black;
  padding: 5px 10px;
  background-color: #e88833;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  // box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  transition-duration: 0.05s;
  &:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.35);
  }
  &:active {
    transform: translateY(2px);
  }
`;

export const Img = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 10px;
`;

export const Head = styled.h3`
  color: #e88833;
  margin: 0;
  text-shadow: 2px 2px 2px #635f48;
`;

export const P = styled.p`
  font-weight: 600;
`;

export const Price = styled.p`
  text-align: right;
  font-weight: 700;
  font-size: 20px;
  margin: 10px;
`;
