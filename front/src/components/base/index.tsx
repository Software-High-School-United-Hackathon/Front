import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import main from "../../assets/imgs/Main.svg";

const Base = () => {
  const Navigate = useNavigate();

  const ClickFunc = () => {
    Navigate("/name");
  };

  return <Wrapper onClick={ClickFunc}></Wrapper>;
};

const Wrapper = styled.div`
  cursor: pointer;
  width: 175vh;
  height: 100vh;
  background-image: url(${main});
  position: relative;
  display: flex;
  justify-content: center;
`;

export default Base;
