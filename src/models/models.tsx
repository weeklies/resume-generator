export interface GeneralProps {
  name: string;
  subtitle: string;
  email: string;
  phone: string;
}

export interface EducationProps {
  title: string;
  articles: EduArticle[];
}

export interface EduArticle {
  course: string;
  school: string;
  date: string;
  responsibilities: string[];
}

export interface WorkProps {
  title: string;
  articles: WorkArticle[];
}

export interface WorkArticle {
  role: string;
  company: string;
  date: string;
  responsibilities: string[];
}

export interface State {
  general: GeneralProps;
  education: EducationProps;
  work: WorkProps;
}

export interface FormProps extends State {
  onElementChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    property?: 'work' | 'education'
  ) => void;
  onItemDelete: (
    e: React.MouseEvent<HTMLButtonElement>,
    property: 'work' | 'education'
  ) => void;
  onItemAdd: (property: 'work' | 'education') => void;
  onResponsbilityAdd: (
    e: React.MouseEvent<HTMLButtonElement>,
    property: 'work' | 'education'
  ) => void;
  onResponsbilityDelete: (
    e: React.MouseEvent<HTMLButtonElement>,
    property: 'work' | 'education'
  ) => void;
}
