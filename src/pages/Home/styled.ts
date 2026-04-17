import styled from "styled-components";
import type { HomeCardArea } from "../../data/home";

type GridProps = {
  $hovered: HomeCardArea | "top" | null;
};

export const Content = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
`;

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-areas:
    "left top"
    "left bottom";

  grid-template-columns: ${({ $hovered }) =>
    $hovered === "left"
      ? "minmax(0, 1.4fr) minmax(0, 2.6fr)"
      : "minmax(0, 0.9fr) minmax(0, 2.3fr)"};

  grid-template-rows: ${({ $hovered }) => {
    if ($hovered === "top") return "minmax(0, 1.6fr) minmax(0, 0.4fr)";
    if ($hovered === "bottom") return "minmax(0, 0.75fr) minmax(0, 1.25fr)";
    return "minmax(0, 1fr) minmax(0, 1fr)";
  }};

  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  box-sizing: border-box;
  height: 100%;
  min-height: 0;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  transition: grid-template-columns 0.4s ease, grid-template-rows 0.4s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    padding: ${({ theme }) => theme.spacing.md};

    & > * {
      flex: 0 0 clamp(220px, 31vh, 300px);
      min-height: 0;
      min-width: 0;
    }
  }
`;

export const CarouselPanel = styled.section`
  grid-area: top;
  min-width: 0;
  min-height: 0;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 260px;
  }
`;
