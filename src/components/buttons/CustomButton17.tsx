// src/components/buttons/CustomButton17.tsx
import React from "react";
import styled from "styled-components";

interface CustomButton17Props {
  text: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  padding?: string;
}

const CustomButton17 = ({
  text,
  href = "#",
  bgColor = "#000000",
  textColor = "#ffffff",
  borderColor = "#ffffff",
  hoverBgColor = "#ffffff",
  hoverTextColor = "#000000",
  hoverBorderColor = "#ffffff",
  padding= "0.8rem 2.5rem",
}: CustomButton17Props) => {
  return (
    <StyledWrapper
      $bgColor={bgColor}
      $textColor={textColor}
      $borderColor={borderColor}
      $hoverBgColor={hoverBgColor}
      $hoverTextColor={hoverTextColor}
      $hoverBorderColor={hoverBorderColor}
      $padding={padding}
    >
        <a href={href}>
      <button className="btn-17 " >
        
        <span className="text-container">
          <span className="text">{text}</span>
        </span>
      </button>
      </a>
    </StyledWrapper>
  );
};

export default CustomButton17;
// Estilos dinámicos
const StyledWrapper = styled.div<{
    $bgColor: string;
    $textColor: string;
    $borderColor: string;
    $hoverBgColor: string;
    $hoverTextColor: string;
    $hoverBorderColor: string;
    $padding: string;
  }>`
    .btn-17 {
      background-color: ${({ $bgColor }) => $bgColor};
      color: ${({ $textColor }) => $textColor};
      border: 1px solid ${({ $borderColor }) => $borderColor};
      padding: ${({ $padding }) => $padding};
      border-radius: 28px;
      position: relative;
      overflow: hidden;
      font-weight: 500;
      font-size: 1rem;
      
      cursor: pointer;
      z-index: 0;
      transition: all 0.3s ease;
    }
  
    .btn-17 .text-container {
      mix-blend-mode: difference;
      display: block;
      position: relative;
      overflow: hidden;
    }
  
    .btn-17 .text {
      display: block;
      transition: transform 0.3s;
    }
  
    .btn-17:hover .text {
      animation: move-up-alternate 0.3s forwards;
    }
  
    @keyframes move-up-alternate {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(80%);
      }
      51% {
        transform: translateY(-80%);
      }
      100% {
        transform: translateY(0);
      }
    }
  
    .btn-17::before,
    .btn-17::after {
      --skew: 0.2;
      content: "";
      position: absolute;
      height: 102%;
      width: 100%;
      pointer-events: none;
      transition: transform 0.2s ease;
      z-index: -1;
    }
  
    .btn-17::before {
      top: -104%;
      left: calc(-50% - 50% * var(--skew));
      background: ${({ $hoverBgColor }) => $hoverBgColor};
      transform: skew(calc(150deg * var(--skew))) translateY(var(--progress, 0));
    }
  
    .btn-17::after {
      top: 102%;
      left: calc(50% + 50% * var(--skew));
      background: ${({ $hoverBgColor }) => $hoverBgColor};
      transform: skew(calc(150deg * var(--skew))) translateY(var(--progress, 0));
    }
  
    .btn-17:hover {
      color: ${({ $hoverTextColor }) => $hoverTextColor};
      border-color: ${({ $hoverBorderColor }) => $hoverBorderColor};
    }
  
    .btn-17:hover::before {
      --progress: 100%;
    }
  
    .btn-17:hover::after {
      --progress: -102%;
    }
  `;
  