import type { Character } from "../../data/characters";
import {
  Card,
  CharacterImage,
  Content,
  Description,
  Header,
  Name,
  PowerItem,
  Powers,
  PowersLabel,
} from "./styled";

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => (
  <Card>
    <Content>
      <Header>
        <Name>{character.name}</Name>
      </Header>
      <CharacterImage
        src={character.image}
        alt={`${character.name} portrait`}
      />
      <Description>{character.description}</Description>
      <PowersLabel>Powers</PowersLabel>
      <Powers aria-label={`${character.name} powers`}>
        {character.powers.map((power) => (
          <PowerItem key={power}>{power}</PowerItem>
        ))}
      </Powers>
    </Content>
  </Card>
);
