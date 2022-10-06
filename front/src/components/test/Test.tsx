import React, { useEffect, useState } from "react";
import styled from "styled-components";
import robot from "../../assets/imgs/robot.svg";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import DefaultBtn from "../common/DefaultBtn";
import { GetQuestion, PostAnswer } from "../../utils/api";
import { IGetTest } from "../../utils/models/response";

const Test = () => {
  const [data, setData] = useState<IGetTest>({
    finance_info: {
      dpr: 0,
      endDate: "",
      hipr: 0,
      id: 0,
      lopr: 0,
      mrktTotAmt: 0,
      trPrc: 0,
      trqu: 0,
      vs: 0,
    },
    id: 0,
    image: "",
    news: {
      article: "",
      id: 0,
      image: "",
      title: "",
    },
    stock: "",
  });
  const [nextTest, setNextTest] = useState<number>(0);

  const marks = [
    {
      value: 0,
      tooltip: -10,
    },
    {
      value: 5,
      tooltip: -5,
    },
    {
      value: 10,
      tooltip: 0,
    },
    {
      value: 15,
      tooltip: 5,
    },
    {
      value: 20,
      tooltip: 10,
    },
  ];

  function valuetext(value: number) {
    return `${value}`;
  }

  function valueLabelFormat(value: number) {
    const target = marks.find((mark) => mark.value === value);
    return target?.tooltip;
  }

  const NextPage = () => {
    const target = marks.find((mark) => mark.value === mark.value);
    if (target == null) return;
    setNextTest(nextTest + 1);
    PostAnswer(data.id, target.tooltip);
  };

  useEffect(() => {
    const token = localStorage.getItem("examId") || "";
    GetQuestion(token).then((res) => {
      setData(res);
    });
  }, [nextTest]);

  console.log(data);

  return (
    <Wrapper>
      <Problem>
        <ProblemTitle>
          <img src={robot} alt="robot" />
          <div className="tipDiv">
            <p id="date">기준날짜: {`${data.finance_info.endDate}`}</p>
            <p id="tip">TIP. {`${data.news.title}`}</p>
          </div>
        </ProblemTitle>
        <ProblemBody>
          <Problem1>
            <div className="chart">
              <img src={data.image} alt="chart" />
            </div>
          </Problem1>
          <Problem2>
            <div className="news">
              <img src={data.news.image} alt="img" />
              <NewsTextDiv>
                <p id="title">{`${data.news.title}`}</p>
                <p id="content">{`${data.news.article}`}</p>
              </NewsTextDiv>
            </div>
            <TableDiv>
              <div className="table">
                <TableTextDiv>
                  <p id="name">고가</p>
                  <p id="content">{`${data.finance_info.hipr}`}</p>
                </TableTextDiv>
                <TableTextDiv>
                  <p id="name">저가</p>
                  <p id="content">{`${data.finance_info.lopr}`}</p>
                </TableTextDiv>
                <TableTextDiv>
                  <p id="name">종가</p>
                  <p id="content">{`${data.finance_info.dpr}`}</p>
                </TableTextDiv>
                <TableTextDiv>
                  <p id="name">시장구분</p>
                  <p id="content">{`${data.stock}`}</p>
                </TableTextDiv>
              </div>
              <div className="table">
                <TableTextDiv>
                  <p id="name">시가총액</p>
                  <p id="content">{`${data.finance_info.mrktTotAmt}`}</p>
                </TableTextDiv>
                <TableTextDiv>
                  <p id="name">거래대금</p>
                  <p id="content">{`${data.finance_info.trPrc}`}</p>
                </TableTextDiv>
                <TableTextDiv>
                  <p id="name">거래량</p>
                  <p id="content">{`${data.finance_info.trqu}`}</p>
                </TableTextDiv>
                <TableTextDiv>
                  <p id="name">전일대비등락</p>
                  <p id="content">{`${data.finance_info.vs}`}</p>
                </TableTextDiv>
              </div>
            </TableDiv>
          </Problem2>
        </ProblemBody>
        <SliderDiv>
          <p id="sell">매도한다</p>
          <Box sx={{ width: 340 }}>
            <Slider
              aria-label="Temperature"
              defaultValue={10}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
              min={0}
              max={20}
            />
          </Box>
          <p id="buy">매수한다</p>
        </SliderDiv>
        <BtnDiv>
          <DefaultBtn onClick={NextPage} defaultColor={true} value="다음" />
        </BtnDiv>
      </Problem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Problem = styled.div`
  width: 1150px;
  height: 610px;
  background-color: ${({ theme }) => theme.color.White};
  box-shadow: 0px 20px 16px rgba(126, 126, 126, 0.08);
  border-radius: 32px;
  padding: 26px 32px 62px 70px;
`;

const ProblemTitle = styled.div`
  display: flex;
  align-items: center;
  .tipDiv {
    #date {
      color: ${({ theme }) => theme.color.Very_Dark_Gray};
      font-size: 16px;
      font-weight: 400;
    }
    #tip {
      font-weight: 600;
      font-size: 22px;
    }
  }
  > img {
    width: 104px;
    height: 112px;
    margin-right: 16px;
    margin-left: 30px;
  }
  > p {
    width: 430px;
    font-weight: 600;
    font-size: 22px;
  }
`;

const ProblemBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Problem1 = styled.div`
  .chart {
    width: 520px;
    height: 400px;
    background-color: ${({ theme }) => theme.color.BG};
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      width: 500px;
      height: 370px;
    }
  }
`;

const Problem2 = styled.div`
  .news {
    width: 520px;
    height: 240px;
    padding: 16px;
    background-color: ${({ theme }) => theme.color.BG};
    gap: 8px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    > img {
      width: 180px;
      height: 180px;
    }
  }
`;

const NewsTextDiv = styled.div`
  #title {
    font-weight: 600;
    font-size: 18px;
  }

  #content {
    width: 325px;
    height: 130px;
    white-space: pre-wrap;
  }
`;

const TableDiv = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  .table {
    padding: 10px;
    width: 252px;
    height: 100px;
    background-color: ${({ theme }) => theme.color.BG};
    border-radius: 16px;
  }
`;

const SliderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  position: relative;
  #sell {
    position: fixed;
    color: ${({ theme }) => theme.color.Primary};
    font-weight: 400;
    font-size: 18px;
    left: 515px;
  }
  #buy {
    position: fixed;
    color: ${({ theme }) => theme.color.Error};
    font-weight: 400;
    font-size: 18px;
    right: 480px;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const TableTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  #name {
    font-weight: 500;
    font-size: 15px;
  }
  #content {
    font-weight: 400;
    font-size: 12px;
  }
`;

export default Test;
