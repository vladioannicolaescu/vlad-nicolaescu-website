import {faFacebookF, faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const SectionLinks = [
  {
    title: 'Home',
    path: '/',
    className: 'nav-link'
  },
  {
    title: 'About Me',
    path: '/about',
    className: 'nav-link'
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
    className: 'nav-link'
  },
  {
    title: 'Contact',
    path: '/contact',
    className: 'nav-link'
  },
];

export const SocialMediaLinks = [
  {
    icon: faFacebookF,
    href: 'https://www.facebook.com/VladIoanNicolaescu'
  },
  {
    icon: faInstagram,
    href: 'https://www.instagram.com/vlad.nicolaescu/'
  },
  {
    icon: faLinkedin,
    href: 'https://linkedin.com/in/vlad-nicolaescu/'
  },
  {
    icon: faGithub,
    href: 'https://github.com/vladioannicolaescu/'
  }
];