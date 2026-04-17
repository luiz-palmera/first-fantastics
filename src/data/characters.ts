import doctorDoomImage from "../assets/characters/doctor-doom.png";
import galactusImage from "../assets/characters/galactus.svg";
import humanTorchImage from "../assets/characters/human-torch.png";
import invisibleWomanImage from "../assets/characters/invisible-woman.png";
import misterFantasticImage from "../assets/characters/mister-fantastic.png";
import moleManImage from "../assets/characters/mole-man.svg";
import redGhostImage from "../assets/characters/red-ghost.svg";
import thingImage from "../assets/characters/the-thing.png";

export interface Character {
  id: string;
  name: string;
  description: string;
  powers: string[];
  image: string;
  element: {
    label: string;
    abbreviation: string;
  };
}

export const fantasticFourMembers: Character[] = [
  {
    id: "mister-fantastic",
    name: "Mister Fantastic",
    description:
      "Reed Richards is the team's brilliant strategist, balancing scientific curiosity with the weight of leadership.",
    powers: ["Elasticity", "Genius intellect", "Scientific invention"],
    image: misterFantasticImage,
    element: {
      label: "Brain",
      abbreviation: "INT",
    },
  },
  {
    id: "invisible-woman",
    name: "Invisible Woman",
    description:
      "Sue Storm anchors the family with calm resolve and some of the most versatile defensive power in Marvel comics.",
    powers: ["Invisibility", "Force fields", "Protective barriers"],
    image: invisibleWomanImage,
    element: {
      label: "Force",
      abbreviation: "FLD",
    },
  },
  {
    id: "human-torch",
    name: "Human Torch",
    description:
      "Johnny Storm brings restless energy, airborne spectacle, and a fearless spark to the team's wildest missions.",
    powers: ["Pyrokinesis", "Flight", "Flame aura"],
    image: humanTorchImage,
    element: {
      label: "Fire",
      abbreviation: "FIR",
    },
  },
  {
    id: "thing",
    name: "The Thing",
    description:
      "Ben Grimm is the team's heart: tough, loyal, funny, and impossible to ignore when trouble starts swinging.",
    powers: ["Super strength", "Rock-like durability", "Close combat"],
    image: thingImage,
    element: {
      label: "Strength",
      abbreviation: "STR",
    },
  },
];

export const mainVillains: Character[] = [
  {
    id: "doctor-doom",
    name: "Doctor Doom",
    description:
      "Victor Von Doom combines royal authority, armored science, and mystic ambition into the team's defining rivalry.",
    powers: ["Powered armor", "Sorcery", "Advanced robotics"],
    image: doctorDoomImage,
    element: {
      label: "Armor",
      abbreviation: "ARM",
    },
  },
  {
    id: "galactus",
    name: "Galactus",
    description:
      "A cosmic force of hunger and judgment, Galactus pushes the Fantastic Four into stories with planetary stakes.",
    powers: ["Cosmic energy", "World consumption", "Reality-scale power"],
    image: galactusImage,
    element: {
      label: "Cosmic",
      abbreviation: "COS",
    },
  },
  {
    id: "red-ghost",
    name: "Red Ghost and his Super-Apes",
    description:
      "Ivan Kragoff weaponizes rivalry and strange science through a crew of super-powered apes trained for chaos.",
    powers: ["Intangibility", "Super-Apes", "Scientific sabotage"],
    image: redGhostImage,
    element: {
      label: "Science",
      abbreviation: "SCI",
    },
  },
  {
    id: "mole-man",
    name: "Mole Man",
    description:
      "One of the team's earliest enemies, Mole Man commands underground kingdoms and strange creatures from below.",
    powers: ["Monster command", "Subterranean strategy", "Tunneling tech"],
    image: moleManImage,
    element: {
      label: "Underground",
      abbreviation: "SUB",
    },
  },
];
