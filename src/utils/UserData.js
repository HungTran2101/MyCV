import avatarImg from '../assets/images/ava-user1.jpg'
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