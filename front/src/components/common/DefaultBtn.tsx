import styled from "styled-components";
import react, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
  defaultColor?: boolean;
}

const DefaultBtn = ({
  defaultColor = true,
  type = "button",
  ...props
}: Props) => {
  return <DefaultBtnBox type={type} defaultColor={defaultColor} {...props} />;
};

const DefaultBtnBox = styled.input<{ width?: number; defaultColor: boolean }>`
  cursor: pointer;
  width: ${({ width }) => (width ? `${width}px` : `120px`)};
  height: 48px;
  background: ${({ defaultColor, theme }) =>
    defaultColor ? theme.color.Primary : theme.color.White};
  border: 1px solid ${({ theme }) => theme.color.Dark_Primary};
  border-radius: 60px;
  color: ${({ defaultColor, theme }) =>
    defaultColor ? theme.color.White : theme.color.Dark_Primary};
  font-weight: 500;
  font-size: 16px;
  :disabled {
    border-color: ${({ theme }) => theme.color.Light_Primary};
    background-color: ${({ theme }) => theme.color.Light_Primary};
    color: ${({ theme }) => theme.color.White};
  }
`;

export default DefaultBtn;
