import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'peteralidante254@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/Alidantech',
      Icon: SiGithub
    },
    {
      name: 'Youtube',
      href: 'https://youtube.com/@alidante',
      Icon: SiYoutube
    },
    {
      name: 'X',
      href: 'https://x.com/Alidantech',
      Icon: SiX
    },
    {
      name: 'Linkedin',
      href: 'https://linkedin.com/in/Alidantech',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
