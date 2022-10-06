import React from "react";
import styled from "styled-components";
import robot from "../../assets/imgs/robot.svg";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

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

const Test = () => {
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
          <img src={robot} alt="robot" />
          <p>올해 전국적으로 어마어마한 사과풍년이 왔습니다 그냥 그렇다구요.</p>
        </ProblemTitle>
        <ProblemBody>
          <Problem1>
            <div className="chart"></div>
          </Problem1>
          <Problem2>
            <div className="news"></div>
            <TableDiv>
              <div className="table"></div>
              <div className="table"></div>
            </TableDiv>
          </Problem2>
        </ProblemBody>
        <SliderDiv>
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
        </SliderDiv>
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
  height: 580px;
  background-color: ${({ theme }) => theme.color.White};
  box-shadow: 0px 20px 16px rgba(126, 126, 126, 0.08);
  border-radius: 32px;
  padding: 26px 32px 62px 70px;
`;

const ProblemTitle = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 104px;
    height: 112px;
    margin-right: 16px;
  }
  > p {
    width: 430px;
    font-weight: 600;
    font-size: 22px;
  }
`;

const ProblemBody = styled.div`
  display: flex;
  gap: 8px;
`;

const Problem1 = styled.div`
  .chart {
    width: 520px;
    height: 400px;
    background-color: ${({ theme }) => theme.color.BG};
    border-radius: 16px;
  }
`;

const Problem2 = styled.div`
  .news {
    width: 540px;
    height: 200px;
    background-color: ${({ theme }) => theme.color.BG};
    border-radius: 16px;
  }
`;

const TableDiv = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  .table {
    width: 265px;
    height: 192px;
    background-color: ${({ theme }) => theme.color.BG};
    border-radius: 16px;
  }
`;

const SliderDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export default Test;
