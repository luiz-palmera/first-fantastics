import styled from "styled-components";

export const Page = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.main`
  display: flex;
  min-height: 0;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.xl};
    padding: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const Header = styled.header`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 760px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: 0.95;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 4rem;
  }
`;

export const Intro = styled.p`
  max-width: 680px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const Timeline = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  list-style: none;
`;

export const Milestone = styled.li`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  min-width: 0;
  border-left: 4px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Year = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
`;

export const MilestoneTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1;
  text-transform: uppercase;
`;

export const MilestoneDescription = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
