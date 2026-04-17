import { Navbar } from "../../components/Navbar";
import { storyMilestones } from "../../data/storyboard";
import {
  Content,
  Header,
  Intro,
  Milestone,
  MilestoneDescription,
  MilestoneTitle,
  Page,
  Timeline,
  Title,
  Year,
} from "./styled";

export const StoryBoard = () => (
  <Page>
    <Navbar />
    <Content>
      <Header>
        <Title>Storyboard</Title>
        <Intro>
          Follow the milestones that shaped the Fantastic Four from a daring
          launch into one of Marvel's defining legacies.
        </Intro>
      </Header>

      <Timeline aria-label="Fantastic Four comic history timeline">
        {storyMilestones.map((milestone) => (
          <Milestone key={milestone.id}>
            <Year>{milestone.year}</Year>
            <MilestoneTitle>{milestone.title}</MilestoneTitle>
            <MilestoneDescription>{milestone.description}</MilestoneDescription>
          </Milestone>
        ))}
      </Timeline>
    </Content>
  </Page>
);
