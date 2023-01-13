import avatarImg from '../assets/images/ava-user1.jpg'
import educationImg1 from '../assets/images/demo-gra.jpg';
import portfoliosImgB1 from '../assets/images/big-1.jpg';
import portfoliosImg1 from '../assets/images/portfolio-1.jpg';
import portfoliosImg2 from '../assets/images/portfolio-2.jpg';
import portfoliosImgB2 from '../assets/images/big-2.jpg';
import portfoliosImg3 from '../assets/images/portfolio-3.jpg';
import portfoliosImg4 from '../assets/images/portfolio-4.jpg';


export const userInfo = {
    name: 'Tran Nhat Hung',
    job: 'Software Engineer & FE/BE Developer',
    email: 'trannhathung2101@gmail.com',
    website: ' hungwebsite.com',
    skype: 'trannhathung2101@gmail.com',
    phone: '(+84)938199067',
    address: '180/9c TT, CL, BT',
    avatar: avatarImg,
};

export const navLinks = [
    {
        title: 'Home',
        href: '#home',
        classIconFA: 'fa fa-user',
    },
    {
        title: 'About',
        href: '#about',
        classIconFA: 'fa fa-dashboard',
    },
    {
        title: 'Education',
        href: '#education',
        classIconFA: 'fa fa-graduation-cap',
    },
    {
        title: 'Skills',
        href: '#skills',
        classIconFA: 'fa fa-sliders',
    },
    {
        title: 'Experience',
        href: '#experience',
        classIconFA: 'fa fa-suitcase',
    },
    {
        title: 'Portfolios',
        href: '#portfolios',
        classIconFA: 'fa fa-archive',
    },
    {
        title: 'Interest',
        href: '#interest',
        classIconFA: 'fa fa-heart',
    },
    {
        title: 'Testimonials',
        href: '#testimonials',
        classIconFA: 'fa fa-users',
    },
    // {
    //     title: 'Pricing',
    //     href: '#pricing',
    //     classIconFA: 'fa fa-money'
    // },
    {
        title: 'Blog',
        href: '#blog',
        classIconFA: 'fa fa-pencil-square',
    },
    {
        title: 'Contact',
        href: '#contact',
        classIconFA: 'fa fa-envelope',
    },
];

export const aboutData = {
    description: `Hello! I'm Hung Tran. Senior Web Developer with over 1 years of experience specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS, CSS3, SCSS, SASS, JSON, XML, Java, JS, ReactJS. Strong background in management and leadership.`,
};

export const educationData = [
    {
        title: 'Preparatory Education',
        place: 'Fedrick School',
        time: 'Jan 1997 - Mar 2000',
        img: educationImg1,
        imgAlt: 'education',
        description:
            'I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
    },
    {
        title: 'High School',
        place: 'RedStreet College',
        time: 'Jan 2000 - Mar 2005',
        description:
            'I completed my high school degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
    },
    {
        title: 'Computer Science',
        place: 'Down Street College',
        time: 'Jan 2006 - Mar 2008',
        description:
            'I completed my computer science degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
    },
    {
        title: 'Software Engineering',
        place: 'Oxford University',
        time: 'Jan 2009 - Mar 2010',
        description:
            'I completed this degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
    },
    {
        title: 'Web Development',
        place: 'Lipro University',
        time: 'Jan 2011 - Mar 2012',
        img: educationImg1,
        imgAlt: 'education',
        description:
            'I completed this course from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
    },
];
export const experienceData = [
    {
        title: 'Designer',
        place: 'RulerSoft',
        time: 'Jan 2010 - Mar 2012',
        description:
            'I started my designing carrier here, spent tow years learning and working in various designing aspects.',
    },
    {
        title: 'Frontend Developer',
        place: 'Micro IT',
        time: 'Jan 2012 - Mar 2014',
        img: educationImg1,
        description:
            'I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online.',
    },
    {
        title: 'UI/UX Expert',
        place: 'Libra IT Solutions',
        time: 'Jan 2014 - Mar 2015',
        description:
            'I started my expertise carrier here, spent tow years learning and working in various UX/UI aspects. I worked on about 70+ projects local and online.',
    },
    {
        title: 'Senior Developer',
        place: 'WebStyle Technologies',
        time: 'Jan 2016 - Continue...',
        description:
            'I recently joined here, currently working on various development aspects. I already worked on about.',
    }
];

export const skillsData = [
    {
        title: 'Professional',
        listSkills: [
            {
                name: 'HTML5',
                progress: '90%'
            },
            {
                name: 'CSS3',
                progress: '90%'
            },
            {
                name: 'jQuery',
                progress: '70%'
            },
            {
                name: 'PHP',
                progress: '68%'
            }
        ]
    },
    {
        title: 'Personal',
        listSkills: [
            {
                name: 'Communication',
                progress: '80%'
            },
            {
                name: 'Teamwork',
                progress: '60%'
            },
            {
                name: 'Creativity',
                progress: '70%'
            },
            {
                name: 'Dedication',
                progress: '70%'
            }
        ]
    },
    {
        title: 'Software',
        listSkills: [
            {
                name: 'Adobe Illustrator',
                progress: '80%'
            },
            {
                name: 'Adobe InDesign',
                progress: '70%'
            },
            {
                name: 'PHP Storm',
                progress: '60%'
            },
            {
                name: 'Dev Console',
                progress: '80%'
            }
        ]
    }
];

export const portfoliosData = [
  {
    type: 'logo',
    items: [
      {
        title: 'lightbox',
        type: 'photo',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImgB1,
        url: portfoliosImgB1,
        alt: 'portfolios',
        captionAnimate: 'fadeIn',
        animate: 'slideInLeft',
        lightboxAnimate: 'flip'
      },
      {
        title: 'lightbox',
        type: 'video',
        text: 'I designed this for a client for his cafe.',
        thumbnail: portfoliosImg1,
        url: 'https://player.vimeo.com/video/45830194?h=2c5541d8bc&color=ffffff&title=0&byline=0&portrait=0&badge=0',
        alt: 'portfolios',
        captionAnimate: 'fadeIn',
        animate: 'slideInRight',
        lightboxAnimate: 'slide'
      },
      {
        title: 'lightbox',
        type: 'photo',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImg2,
        url: portfoliosImg2,
        alt: 'portfolios',
        captionAnimate: 'slideUp',
        animate: 'slideInRight',
        lightboxAnimate: 'slide'
      },
    ],
  },
  {
    type: 'dribble',
    items: [
      {
        title: 'lightbox',
        type: 'photo',
        text: 'Effect also available for Lightbox Image Check The Doc',
        thumbnail: portfoliosImgB2,
        url: portfoliosImgB2,
        alt: 'portfolios',
        captionAnimate: 'slideUp',
        animate: 'slideInRight',
        lightboxAnimate: 'slide'
      },
      {
        title: 'lightbox',
        type: 'photo',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImg3,
        url: portfoliosImg3,
        alt: 'portfolios',
        captionAnimate: 'fadeIn',
        animate: 'slideInLeft',
        lightboxAnimate: 'fade'
      },
      {
        title: 'lightbox',
        type: 'photo',
        text: 'I designed this for a client for his cafe.',
        thumbnail: portfoliosImg4,
        url: portfoliosImg4,
        alt: 'portfolios',
        captionAnimate: 'slideUp',
        animate: 'slideInLeft',
        lightboxAnimate: 'flip'
      },
    ],
  },
  {
    type: 'websites',
    items: [
      {
        title: 'single',
        type: 'url',
        text: 'Showcase Your Portfolio in Details on a Single Page',
        thumbnail: portfoliosImgB1,
        url: 'https://www.youtube.com/watch?v=Mf6I68db-R8',
        alt: 'portfolios',
        captionAnimate: 'slideUp',
        animate: 'slideInLeft'
      },
      {
        title: 'single',
        type: 'url',
        text: 'Showcase Your Portfolio in Details on a Single Page',
        thumbnail: portfoliosImg1,
        url: 'https://www.youtube.com/watch?v=O_vzVAKTsV8',
        alt: 'portfolios',
        captionAnimate: 'slideUp',
        animate: 'slideInRight'
      },
      {
        title: 'single',
        type: 'url',
        text: 'Showcase Your Portfolio in Details on a Single Page',
        thumbnail: portfoliosImg2,
        url: 'https://www.youtube.com/watch?v=P0iO3iSSqbM',
        alt: 'portfolios',
        captionAnimate: 'slideUp',
        animate: 'slideInLeft'
      },
      {
        title: 'single',
        type: 'url',
        text: 'Showcase Your Portfolio in Details on a Single Page',
        thumbnail: portfoliosImgB2,
        url: 'https://www.youtube.com/watch?v=WZgW2yWHr5s',
        alt: 'portfolios',
        captionAnimate: 'slideUp',
        animate: 'slideInLeft'
      },
      {
        title: 'single',
        type: 'url',
        text: 'Showcase Your Portfolio in Details on a Single Page',
        thumbnail: portfoliosImg3,
        url: 'https://www.youtube.com/watch?v=vwRlKqDltlI',
        alt: 'portfolios',
        captionAnimate: 'slideUp',
        animate: 'slideInRight'
      },
      {
        title: 'single',
        type: 'url',
        text: 'Showcase Your Portfolio in Details on a Single Page',
        thumbnail: portfoliosImg4,
        url: 'https://www.youtube.com/watch?v=Rh85Vqummy8',
        alt: 'portfolios',
        captionAnimate: 'slideUp',
        animate: 'slideInLeft'
      },
    ],
  },
];