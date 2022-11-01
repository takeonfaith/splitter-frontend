import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button<{
  background: string;
  color: string;
  active: boolean;
  width?: string;
}>`
  width: ${({ width }) => width ?? "100%"};
  height: 40px;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  padding: 0 12px;
  border-radius: 6px;
  outline: none;
  border: none;
  font-weight: 600;
  pointer-events: ${({ active }) => (active ? "all" : "none")};
  opacity: ${({ active }) => (active ? "1" : "0.2")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  background: string;
  color: string;
  active: boolean;
  width?: string;
};

const Button = ({
  background,
  color,
  children,
  active,
  ...restProps
}: Props) => {
  return (
    <ButtonStyled
      background={background}
      color={color}
      active={active}
      {...restProps}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
