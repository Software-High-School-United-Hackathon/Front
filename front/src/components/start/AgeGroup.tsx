import { useRecoilState } from "recoil";
import styled from "styled-components";
import robot from "../../assets/imgs/robot.svg";
import DefaultBtn from "../common/DefaultBtn";
import { infoState } from "../../store/atom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostTest } from "../../utils/api/index";

const AgeData = {
  ageList: [
    { age: "10대", value: 10 },
    { age: "20대", value: 20 },
    { age: "30대", value: 30 },
    { age: "40대", value: 40 },
    { age: "50대", value: 50 },
    { age: "60대", value: 60 },
    { age: "70대", value: 70 },
    { age: "80대", value: 80 },
    { age: "90대", value: 90 },
  ],
};

const AgeGroup = () => {
  const [state, setState] = useRecoilState(infoState);
  const [cur, setCur] = useState<number>();
  const navigate = useNavigate();

  const onClickAge = (num: number) => {
    setState({ ...state, age_disabled: false });
    setCur(num);
  };

  const onSubmit = () => {
    console.log(cur, state.name);
    PostTest({ age: state.age, name: state.name })
      .then((res) => {
        localStorage.setItem("examId", res.data);
        const token = localStorage.getItem("examId") || "";
        navigate(`/test/${token}`);
      })
      .catch();
  };

  return (
    <Wrapper>
      <InputBox>
        <img src={robot} alt="robot" />
        <Description>"OOO"님의 나이대를 알려주세요.</Description>
        <BoxDiv>
          {AgeData.ageList.map((data, index) => (
            <BoxWrapper
              key={data.value}
              state={!((index + 1) * 10 === cur)}
              onClick={() => onClickAge((index + 1) * 10)}
            >
              {data.age}
            </BoxWrapper>
          ))}
        </BoxDiv>
        <div className="btnDiv">
          <DefaultBtn
            onClick={onSubmit}
            disabled={state.age_disabled}
            defaultColor={true}
            value="시작하기"
          />
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
  justify-content: centers;
  align-items: center;
  > img {
    padding-top: 30px;
    width: 104px;
    height: 112px;
  }
  .btnDiv {
    margin-top: 132px;
  }
`;

const Description = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

const BoxDiv = styled.div`
  margin-top: 42px;
  width: 410px;
  height: 250px;
  gap: 4px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// AgeBox style
const BoxWrapper = styled.button<{ state: boolean }>`
  cursor: pointer;
  width: 130px;
  height: 80px;
  background-color: ${({ theme }) => theme.color.Box_Gray};
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  transition: all 0.3s;
  color: ${({ state, theme }) =>
    state ? theme.color.Black : theme.color.Dark_Primary};
  border: ${({ state, theme }) =>
    state ? theme.color.black : theme.color.Dark_Primary};
`;

export default AgeGroup;
