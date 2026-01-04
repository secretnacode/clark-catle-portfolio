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
}[];
