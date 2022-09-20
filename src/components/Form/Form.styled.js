import styled from '@emotion/styled';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  // border: black solid 1px;
  // border-radius: 15px;
  max-width: 400px;
  padding: 0 40px;
  margin-right: 30px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
export const Input = styled.input`
  // width: 300px;
  height: 40px;
  border-radius: 10px;
  border: black solid 1px;
  padding: 5px 10px;
  margin-top: 5px;
  &:focus {
    // border: #e7a61a solid 3px;
  }
`;

export const Button = styled.button`
  background-color: #d0a686;
  height: 60px;
  width: 100px;
  border-radius: 15px;
  margin-left: 60px;
  font-size: 20px;
  margin-right: 180px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;
export const P = styled.p`
  color: red;
  font-size: 13px;
  margin: 2px 15px;
`;

export const Title = styled.h3`
  font-weight: 800;
  margin-left: 20px;
`;

export const CheckText = styled.p`
  margin-left: 15px;
`;

export const Checkbox = styled.label`
  display: flex;
  margin-left: 15px;
  margin-bottom: 10px;
`;
