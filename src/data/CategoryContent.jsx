import {
  Trophy,
  Landmark,
  BriefcaseBusiness,
  Hospital,
  Microscope,
  Film,
} from 'lucide-react';

const categoryContent = [
  {
    title: 'Sports',
    icon: <Trophy size={32} strokeWidth={1} />,
    link: '/sports',
  },
  {
    title: 'Politics',
    icon: <Landmark size={32} strokeWidth={1} />,
    link: '/politics',
  },
  {
    title: 'Business',
    icon: <BriefcaseBusiness size={32} strokeWidth={1} />,
    link: '/business',
  },
  {
    title: 'Health',
    icon: <Hospital size={32} strokeWidth={1} />,
    link: '/health',
  },
  {
    title: 'Science',
    icon: <Microscope size={32} strokeWidth={1} />,
    link: '/science',
  },
  {
    title: 'Entertainment',
    icon: <Film size={32} strokeWidth={1} />,
    link: '/entertainment',
  },
];

export default categoryContent;
