import React from "react";
import styled from "styled-components";

interface CustomStyledButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  padding?: string;
  fontSize?: string;
  borderRadius?: string;
  href?: string;
}

const CustomStyledButton = ({
  text,
  bgColor = "#ffffff",
  textColor = "#000000",
  borderColor = "#4f4f4f",
  hoverBgColor = "#39bda7",
  hoverTextColor = "#ffffff",
  hoverBorderColor = "#39bda7",
  padding = "12px 24px",
  fontSize = "19px",
  borderRadius = "4px",
  href = "#",
}: CustomStyledButtonProps) => {
  return (
    <StyledWrapper
      $bgColor={bgColor}
      $textColor={textColor}
      $borderColor={borderColor}
      $hoverBgColor={hoverBgColor}
      $hoverTextColor={hoverTextColor}
      $hoverBorderColor={hoverBorderColor}
      $padding={padding}
      $fontSize={fontSize}
      $borderRadius={borderRadius}
    >
      <a className="button" href={href}>
        {text}
      </a>
    </StyledWrapper>
  );
};

export default CustomStyledButton;

// ---------- Estilos con styled-components ----------

const StyledWrapper = styled.div<{
  $bgColor: string;
  $textColor: string;
  $borderColor: string;
  $hoverBgColor: string;
  $hoverTextColor: string;
  $hoverBorderColor: string;
  $padding: string;
  $fontSize: string;
  $borderRadius: string;
}>`
  .button {
    display: inline-block;
    padding: ${({ $padding }) => $padding};
    font-size: ${({ $fontSize }) => $fontSize};
    border: 1px solid ${({ $borderColor }) => $borderColor};
    border-radius: 4px;
    background-color: ${({ $bgColor }) => $bgColor};
    color: ${({ $textColor }) => $textColor};
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    text-decoration: none;
  }

  .button:before,
  .button:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    border-radius: ${({ $borderRadius }) => $borderRadius};

    display: block;
    transition: all 0.5s 0s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:before {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .button:after {
    background-color: ${({ $hoverBgColor }) => $hoverBgColor};
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
  }

  .button:hover {
    color: ${({ $hoverTextColor }) => $hoverTextColor};
    border: 1px solid ${({ $hoverBorderColor }) => $hoverBorderColor};
  }

  .button:hover:before {
    top: -35%;
    background-color: ${({ $hoverBgColor }) => $hoverBgColor};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  .button:hover:after {
    top: -45%;
    background-color: ${({ $hoverBgColor }) => $hoverBgColor};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;
