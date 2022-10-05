import React from "react";
import styled from "styled-components";
import robot from "../../assets/imgs/robot.svg";
import DefaultBtn from "../common/DefaultBtn";

const Name = () => {
  return (
    <Wrapper>
      <InputBox>
        <img src={robot} alt="robot" />
        <Description>이름을 알려주세요.</Description>
        <NameInput type="text" />
        <NameCount>0/10</NameCount>
        <div className="btnDiv">
          <DefaultBtn defaultColor={true} value="다음" />
        </div>
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  width: 580px;
  height: 700px;
  background-color: ${({ theme }) => theme.color.White};
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    padding-top: 30px;
    width: 104px;
    height: 112px;
  }
  .btnDiv {
    margin-top: 180px;
  }
`;

const Description = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

const NameInput = styled.input`
  width: 380px;
  height: 40px;
  margin-top: 180px;
  border: 1px solid black;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
`;

const NameCount = styled.p`
  color: ${({ theme }) => theme.color.Dark_Gray};
  font-size: 12px;
  font-weight: 500;
  margin-left: 340px;
  margin-top: 8px;
`;

export default Name;
