export enum SelectedPage {
    Home= 'home',
    Benefits= 'Benefits',
    OurClasses= 'OurClasses',
    ContactUs='ContactUs',
  
  }

  export interface BenefitType {
    icon : JSX.Element;
    title:string;
    description:string;
  }
  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }