import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'ABUZAR AKHTAR',
  subTitle: 'CSE Major | jamia hamdard.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Abuzar Akhtar portfolio.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* I'm an avid maker and curious thinker, currently pursuing a B.Tech in CSE at JAMIA HAMDARD. I enjoy comprehending how things work and exploring different technologies..",
        '',
        '* Currently immersed in building an AI-based EdTech startup "HOUSE OF WISDOM", driven by my dedication to harnessing technology for enhanced learning experiences. My primary focus is to leverage the power of technology in order to transform and improve the way we learn.',
        
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'HOUSE OF WISDOM',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://drive.google.com/file/d/1YwRk4f3Ha59I4Le9MEFRvDlcVAwbP7fU/view?usp=sharing',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('CERTIFICATES'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'CERTIFICATES',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/Abuzar-1.png',
            websiteURL: 'https://drive.google.com/file/d/1R48SFBvl-CI_kIa-b-JzU0iR09YvMbFS/view?usp=drive_link',
          },
          {
            url: 'websites-preview/IMG_20221111_213639.png',
            websiteURL: 'https://drive.google.com/file/d/1Ri4KjH6GDKcIopsjycPJ2_n5FrIISrIt/view?usp=drive_link',
          },
          {
            url: 'websites-preview/1684914287646.png',
            websiteURL: 'https://drive.google.com/file/d/1S3QGh1An39QW1DStBqIxhzgDNQvXf0de/view?usp=drive_link',
          },
          {
            url: 'websites-preview/Abuzar.png',
            websiteURL: 'https://drive.google.com/file/d/1bisSK_ucAC5aXoExSPjAJ8w3ypUkmr0s/view?usp=drive_link',
          },
          {
            url: 'websites-preview/c6135833-6d56-4880-9ff9-9e4d2912e62a.png',
            websiteURL: 'https://drive.google.com/file/d/1yz5Y6i4jQDliPReX3HtAUDfNiCw_TVjP/view?usp=drive_link',
          },
          {
            url: 'websites-preview/f1ed412f-416e-4c22-aa3d-6877f94a4beb.png',
            websiteURL: 'https://drive.google.com/file/d/1TwOJRjNSrAOibLK7dotsHBc3H7svJnTn/view?usp=drive_link',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/twitter.png',
            websiteURL: 'https://twitter.com/Abuzar001101',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/abuzar-akhtar-a2b325189/',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/abuzar0013',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:abuzar0013@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
