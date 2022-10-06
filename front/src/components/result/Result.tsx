import styled from "styled-components";
import share from "../../assets/imgs/share.svg";
import DefaultBtn from "../common/DefaultBtn";

const Result = () => {
  return (
    <Wrapper>
      <ResultBox>
        <div className="img" />
        <ScoreDiv>
          <p id="name">최종점수</p>
          <p id="score">10</p>
        </ScoreDiv>
        <TestDiv>
          <p id="name">맞은문제 / 총문제</p>
          <p id="test">1 / 10</p>
        </TestDiv>
        <FaceDiv>
          <div className="head">
            <p id="name">투자성향</p>
            <p id="face">위험중립형</p>
          </div>
          <HR />
          <p id="content">
            투자원금의 손실위험은 최소화 하고, 이자소득이나 배당소득 수준의
            안정적인 투자를 목표로 함. 다만, 수익을 위해 단기적인 손실을 수용할
            수 있으며, 예ㆍ적금보다 높은 수익을 위해 자산 중 일부를 변동성 높은
            상품에 투자할 의향이 있는 유형
          </p>
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
  .img {
    width: 180px;
    height: 180px;
    background-color: black;
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
