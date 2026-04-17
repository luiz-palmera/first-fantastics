import styled from "styled-components";

type CardStyleProps = {
  $variant?: "vertical" | "horizontal";
  $area?: string;
};

export const CardContainer = styled.article<CardStyleProps>`
  position: relative;
  grid-area: ${({ $area }) => $area};
  display: flex;
  flex-direction: ${({ $variant }) =>
    $variant === "horizontal" ? "row-reverse" : "column"};
  align-items: ${({ $variant }) =>
    $variant === "horizontal" ? "stretch" : "center"};
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
  background-position: center;
  background-size: cover;
  cursor: pointer;
  transition: transform 0.4s ease;
  will-change: transform;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div<CardStyleProps>`
  z-index: 1;
  display: flex;
  flex-direction: ${({ $variant }) =>
    $variant === "horizontal" ? "column" : "row"};
  align-items: ${({ $variant }) =>
    $variant === "horizontal" ? "flex-start" : "flex-end"};
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  flex: ${({ $variant }) => ($variant === "horizontal" ? "0 0 40%" : "0 0 auto")};
  width: ${({ $variant }) => ($variant === "horizontal" ? "40%" : "100%")};
  max-width: ${({ $variant }) => ($variant === "horizontal" ? "40%" : "100%")};
  min-width: 0;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.surface};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    align-items: flex-end;
    flex: 0 0 auto;
    width: 100%;
    max-width: 100%;
  }
`;

export const TitleImage = styled.img<CardStyleProps>`
  width: auto;
  height: clamp(50px, 12vh, 120px);
  max-width: 90%;
  object-fit: contain;
  transition: margin 0.4s ease-in-out;



  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: clamp(40px, 10vh, 80px);
    margin-left: ${({ $variant }) => ($variant === "horizontal" ? "1rem" : "0")};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: clamp(30px, 7vh, 60px);
    margin-left: 0;
  }
`;

export const SubtitleImage = styled.img<CardStyleProps>`
  visibility: hidden;
  width: auto;
  height: clamp(30px, 7vh, 80px);
  max-width: 80%;
  object-fit: contain;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
  transform: translateX(-30px);
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;

  ${CardContainer}:hover & {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: clamp(25px, 6vh, 70px);
    margin-left: ${({ $variant }) => ($variant === "horizontal" ? "1rem" : "0")};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: clamp(20px, 4vh, 50px);
    margin-left: 0;
  }
`;

export const CardImage = styled.img`
  flex: 1 1 0;
  width: 100%;
  min-width: 0;
  height: 100%;
  min-height: 0;
  object-fit: cover;
  transition: transform 0.3s ease;
`;
