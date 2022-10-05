import styled from "styled-components";
import robot from "../../assets/imgs/robot.svg";
import DefaultBtn from "../common/DefaultBtn";

interface AgeBox {
  age: string;
}

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

const AgeBox = ({ age }: AgeBox) => {
  return (
    <BoxWrapper>
      <p>{age}</p>
    </BoxWrapper>
  );
};

const AgeGroup = () => {
  return (
    <Wrapper>
      <InputBox>
        <img src={robot} alt="robot" />
        <Description>"OOO"님의 나이대를 알려주세요.</Description>
        <BoxDiv>
          {AgeData.ageList.map((data) => (
            <>
              <AgeBox age={data.age} />
            </>
          ))}
        </BoxDiv>
        <div className="btnDiv">
          <DefaultBtn defaultColor={true} value="시작하기" />
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
    margin-top: 43px;
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
const BoxWrapper = styled.div`
  width: 130px;
  height: 80px;
  background-color: ${({ theme }) => theme.color.Box_Gray};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    font-weight: 500;
    font-size: 16px;
  }
`;

export default AgeGroup;
