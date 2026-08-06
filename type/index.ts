export type projectCardPropType = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonRedirection: string;
  isReverse?: boolean;
};

export type personalProjectsVariableProjectType = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}[];

export type projectType = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  period: string;
  links: linkType;
  stack: stackType;
  overview: string;
  who: string;
  why: string;
  problem: problemType;
  goals: string[];
  responsibilities: string[];
  architecture: architectureType;
  features: featuresType[];
  implementation: implementationType;
  challenges: challengesType[];
  results: string[];
  lessons: string[];
};

type linkType = {
  live: string;
  github: string;
  docs: string;
};

type stackType = {
  frontend: string[];
  backend: string[];
  database: string[];
  deployment: string[];
};

type problemType = {
  limitations: string[];
  statement: string;
};

type architectureType = {
  flow: {
    label: string;
    note: string;
  }[];
  explanation: string;
};

type featuresType = {
  name: string;
  description: string;
  implementation: string;
};

type implementationType = {
  backend: string[];
  database: string[];
  frontend: string[];
};

type challengesType = {
  challenge: string;
  impact: string;
  solution: string;
  decision: string;
};
