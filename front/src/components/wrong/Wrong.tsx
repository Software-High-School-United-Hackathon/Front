import { useEffect, useState } from "react";
import styled from "styled-components";
import wrong from "../../assets/imgs/wrong.svg";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { makeStyles } from "@mui/styles";
import DefaultBtn from "../common/DefaultBtn";
import example from "../../assets/imgs/example.png";
import example2 from "../../assets/imgs/example2.png";
import { GetFailQuestion } from "../../utils/api";
import { IGetFailTest } from "../../utils/models/response";

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

const useStyles = makeStyles({
  sliders: {
    color: "#B4C1F6",
  },
});

const Wrong = () => {
  const [data, setData] = useState<IGetFailTest>({
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

  const test = useStyles();

  useEffect(() => {
    const token = localStorage.getItem("examId") || "";
    GetFailQuestion(token).then((res) => {
      setData(res);
    });
  }, []);

  function valuetext(value: number) {
    return `${value}`;
  }

  function valueLabelFormat(value: number) {
    const target = marks.find((mark) => mark.value === value);
    return target?.tooltip;
  }

  return (
    <Wrapper>
      <Problem>
        <ProblemTitle>
          <img src={wrong} alt="robot" />
          <div className="tipDiv">
            <p id="date">기준날짜: 2022년 10월 6일</p>
            <p id="tip">해설: 블라블라라라라라</p>
          </div>
        </ProblemTitle>
        <ProblemBody>
          <Problem1>
            <div className="chart">
              <img src={example} alt="chart" />
            </div>
          </Problem1>
          <Problem2>
            <div className="news">
              <img src={example2} alt="img" />
              <NewsTextDiv>
                <p id="title">
                  엄청난 충주사과 풍년으로 사과값 떡락위기 전국사과 농가
                  후들후들...
                </p>
                <p id="content"></p>
              </NewsTextDiv>
            </div>
            <TableDiv>
              <div className="table"></div>
              <div className="table"></div>
            </TableDiv>
          </Problem2>
        </ProblemBody>
        <SliderDiv>
          <p id="sell">매도한다</p>
          <Box sx={{ width: 340 }}>
            <Slider
              className={test.sliders}
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
          <DefaultBtn defaultColor={true} value="다음" />
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
    height: 170px;
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
    width: 272px;
    height: 192px;
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

export default Wrong;
