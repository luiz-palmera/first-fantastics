export interface StoryMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const storyMilestones: StoryMilestone[] = [
  {
    id: "first-flight",
    year: "1961",
    title: "The First Flight",
    description:
      "A risky space mission changes Reed, Sue, Johnny, and Ben forever, turning them into Marvel's first family.",
  },
  {
    id: "mole-man",
    year: "1961",
    title: "The Mole Man Appears",
    description:
      "Their earliest adventure sends the team below the surface and establishes the Fantastic Four as explorers first.",
  },
  {
    id: "doctor-doom",
    year: "1962",
    title: "Doctor Doom Arrives",
    description:
      "Victor Von Doom enters the mythos, bringing a rivalry built on pride, science, power, and unfinished history.",
  },
  {
    id: "galactus",
    year: "1966",
    title: "The Galactus Trilogy",
    description:
      "The team faces cosmic scale for the first time, with the Silver Surfer and Galactus reshaping what superhero stories can hold.",
  },
];
