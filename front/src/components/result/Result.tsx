import { useEffect, useState } from "react";
import styled from "styled-components";
import share from "../../assets/imgs/share.svg";
import { GetResult } from "../../utils/api";
import { IGetResult } from "../../utils/models/response";
import DefaultBtn from "../common/DefaultBtn";
import money from "../../assets/imgs/money.svg";
import safe from "../../assets/imgs/safe.svg";
import shield from "../../assets/imgs/shield.svg";
import sword from "../../assets/imgs/sword.svg";
import balance from "../../assets/imgs/balance.svg";

const Result = () => {
  const [data, setData] = useState<IGetResult>({
    all_question_count: 0,
    score: 0,
    tendency: "",
    tendency_type: 0,
    tendency_explanation: "",
    wrong_sum: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("examId") || "";
    GetResult(token).then((res) => {
      setData(res);
    });
  }, []);

  let ClearTest = data.all_question_count - data.wrong_sum;

  console.log(ClearTest, data);

  const imgArr = ["img", shield, safe, balance, money, sword];

  return (
    <Wrapper>
      <ResultBox>
        <img alt="img" src={imgArr[data.tendency_type]} />
        <ScoreDiv>
          <p id="name">최종점수</p>
          <p id="score">{`${data.score}`}</p>
        </ScoreDiv>
        <TestDiv>
          <p id="name">맞은문제 / 총문제</p>
          <p id="test">
            {ClearTest} / {`${data.all_question_count}`}
          </p>
        </TestDiv>
        <FaceDiv>
          <div className="head">
            <p id="name">투자성향</p>
            <p id="face">{`${data.tendency}`}</p>
          </div>
          <HR />
          <p id="content">{`${data.tendency_explanation}`}</p>
        </FaceDiv>
        <BtnDiv>
          <DefaultBtn defaultColor={true} value="틀린문제" />
          <div className="grayBtn">
            <img src={share} alt="share" />
          </div>
        </BtnDiv>
      </ResultBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultBox = styled.div`
  width: 340px;
  height: 635px;
  background-color: ${({ theme }) => theme.color.White};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px 44px 50px;
  border-radius: 32px;
  box-shadow: 0px 20px 16px rgba(126, 126, 126, 0.08);
  > img {
    width: 180px;
    height: 180px;
    margin-bottom: 40px;
  }
`;

const ScoreDiv = styled.div`
  width: 280px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.Light_Gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 24px;
  border-radius: 16px;
  #name {
    font-weight: 400;
    font-size: 14px;
  }
  #score {
    font-weight: 600;
    font-size: 22px;
  }
`;

const TestDiv = styled.div`
  width: 280px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.Light_Gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 24px;
  border-radius: 16px;
  margin-top: 5px;
  #name {
    font-weight: 400;
    font-size: 14px;
  }
  #test {
    font-weight: 600;
    font-size: 22px;
  }
`;

const FaceDiv = styled.div`
  width: 280px;
  height: 130px;
  background-color: ${({ theme }) => theme.color.Light_Gray};
  padding: 21px 24px;
  border-radius: 16px;
  margin-top: 10px;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    #name {
      font-weight: 400;
      font-size: 14px;
    }
    #face {
      font-weight: 600;
      font-size: 22px;
    }
  }
  #content {
    font-weight: 400;
    font-size: 14px;
    margin-top: 13px;
    color: ${({ theme }) => theme.color.Very_Dark_Gray};
  }
`;

const HR = styled.hr`
  margin-top: 10px;
  height: 1px;
  background-color: ${({ theme }) => theme.color.Gray};
`;

const BtnDiv = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 56px;
  .grayBtn {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.color.Light_Gray};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Result;
