import avatarImg from '../assets/images/ava-user.jpeg'
import educationImg1 from '../assets/images/demo-gra.jpg';

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