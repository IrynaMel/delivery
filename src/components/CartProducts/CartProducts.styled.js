import styled from '@emotion/styled';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.35);
  margin-right: 0px;
  margin-top: 0px;
  max-height: 65vh;
  min-width: 50vw;
  max-width: 90vw;
  overflow-y: scroll;
  padding: 20px;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 20px;
    background-color: #d0a686;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: #7b7169;
    border-radius: 20px;
  }
`;

export const Li = styled.li`
  position: relative;
  margin: 10px;
  max-width: 70vw;
  max-height: 120px;
  border: black solid 1px;
  padding: 20px;
  border-radius: 15px;
  list-style-type: none;
  display: flex;
`;

export const Div = styled.div`
  display: block;
  margin-left: 20px;
  // text-align: center;
  padding: 0 40px;
`;

export const Qty = styled.div`
  position: relative;
  display: flex;
  // justify-content: flex-end;
  max-width: 350px;
  min-width: 150px;
  max-height: 40px;
  // border: black solid 1px;
  // border-radius: 10px;
  // overflow: hidden;
`;

export const Button = styled.button`
  height: 20px;
  width: 50px;
  margin: 5px;
  border: 0;
  border-radius: 5px;
  background-color: #d0a686;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.35);
  }
  &:active {
    transform: translateY(2px);
  }
`;

export const Buttons = styled.div`
  position: absolute;
  wi/dth: 150px;
  display: flex;
  flex-direction: column;
  right: 5px;
  top: -15px;
  // margin-left: 130px;
`;
