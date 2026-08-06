import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

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

export type projectSectionType = {
  slug: string;
  name: string;
  description: string;
  role: string;
  tags: string[];
};

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

export type caseStudyType = {
  index: number;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export type linkType = {
  live: string;
  github: string;
  docs: string;
};

export type LinkCardType = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

export type stackType = {
  frontend: string[];
  backend: string[];
  database: string[];
  deployment: string[];
};

export type problemType = {
  limitations: string[];
  statement: string;
};

export type architectureType = {
  flow: {
    label: string;
    note: string;
  }[];
  explanation: string;
};

export type featuresType = {
  name: string;
  description: string;
  implementation: string;
};

export type implementationType = {
  backend: string[];
  database: string[];
  frontend: string[];
};

export type challengesType = {
  challenge: string;
  impact: string;
  solution: string;
  decision: string;
};

export type fieldType = {
  label: string;
  text: string;
  highlight?: boolean;
};
