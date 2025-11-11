import { BriefcaseBusiness, Cpu, Film, Hospital, Trophy } from 'lucide-react';

const categoryContent = [
  {
    title: 'Sports',
    icon: <Trophy size={32} strokeWidth={1} />,
    link: '/sports',
  },
  {
    title: 'Technology',
    icon: <Cpu size={32} strokeWidth={1} />,
    link: '/technology',
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
    title: 'Entertainment',
    icon: <Film size={32} strokeWidth={1} />,
    link: '/entertainment',
  },
];

export default categoryContent;
