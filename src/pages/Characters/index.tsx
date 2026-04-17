import { CharacterCard } from "../../components/CharacterCard";
import { Navbar } from "../../components/Navbar";
import { fantasticFourMembers } from "../../data/characters";
import {
  CardsGrid,
  Content,
  Header,
  Intro,
  Page,
  Section,
  SectionsLayout,
  SectionTitle,
  Title,
} from "./styled";

export const Characters = () => (
  <Page>
    <Navbar />
    <Content>
      <Header>
        <Title>Characters</Title>
        <Intro>
          Meet the explorers, rivals, and cosmic threats that define the
          Fantastic Four's greatest adventures.
        </Intro>
      </Header>

      <SectionsLayout>
        <Section aria-labelledby="fantastic-four-title">
          <SectionTitle id="fantastic-four-title">Fantastic Four</SectionTitle>
          <CardsGrid>
            {fantasticFourMembers.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </CardsGrid>
        </Section>
      </SectionsLayout>
    </Content>
  </Page>
);
