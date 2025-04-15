import React from "react";
import styled from "styled-components";

interface GooeyButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  padding?: string;
  fontSize?: string;
  href?: string;
}

const GooeyButton = ({
  text,
  bgColor = "transparent",
  textColor = "#00A97F",
  borderColor = "#00A97F",
  hoverBgColor = "#00A97F",
  hoverTextColor = "#0a191e",
  padding = "0.8em 1.7em",
  fontSize = "17px",
  href = "#",
}: GooeyButtonProps) => {
  return (
    <StyledWrapper
      $textColor={textColor}
      $bgColor={bgColor}
      $borderColor={borderColor}
      $hoverBgColor={hoverBgColor}
      $hoverTextColor={hoverTextColor}
      $padding={padding}
      $fontSize={fontSize}
    >
      <a className="button" href={href}>
        {text}
      </a>
    </StyledWrapper>
    
  );
};

export default GooeyButton;
const StyledWrapper = styled.div<{
    $textColor: string;
    $bgColor: string;
    $borderColor: string;
    $hoverBgColor: string;
    $hoverTextColor: string;
    $padding: string;
    $fontSize: string;
  }>`
    .button {
      padding: ${({ $padding }) => $padding};
      font-size: ${({ $fontSize }) => $fontSize};
      background-color: ${({ $bgColor }) => $bgColor};
      color: ${({ $textColor }) => $textColor};
      border: 1px solid ${({ $borderColor }) => $borderColor};
      border-radius: 0.3em;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      transition: 0.5s;
      font-weight: 400;
      font-family: inherit;
      
      z-index: 1;
      text-decoration: none;
      display: inline-block;
    }
  
    .button::before,
    .button::after {
      content: "";
      display: block;
      width: 50px;
      height: 50px;
      transform: translate(-50%, -50%);
      position: absolute;
      border-radius: 50%;
      z-index: -1;
      background-color: ${({ $hoverBgColor }) => $hoverBgColor};
      transition: 1s ease;
    }
  
    .button::before {
      top: -1em;
      left: -1em;
    }
  
    .button::after {
      left: calc(100% + 1em);
      top: calc(100% + 1em);
    }
  
    .button:hover::before,
    .button:hover::after {
      width: 410px;
      height: 410px;
    }
  
    .button:hover {
      color: ${({ $hoverTextColor }) => $hoverTextColor};
      border-color: ${({ $hoverBgColor }) => $hoverBgColor};
    }
  
    .button:active {
      filter: brightness(0.9);
    }
  `;
  