import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Oleh",
  lastName: "Opalko",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Python Django Developer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Kyiv",
  languages: ["English", "Ukrainian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/oleg-opalko",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/oleh-opalko-b10b7619b/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:oopalko96@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I
      craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Python Developer with 8 months of experience in backend development
        using Django. Passionate about building scalable web applications and
        improving backend architecture. Seeking opportunities to contribute to
        challenging projects and grow as a backend engineer.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "EXPERIENCE",
    experiences: [
      {
        company: "GOLDEN WEB DIGITAL",
        timeframe: "Dec 2024 - Present",
        role: "Python Django Developer",
        achievements: [
          <>Developed and optimized new features for multiple web projects.</>,
          <>Identified and fixed critical bugs to improve system stability.</>,
          <>Improved page load performance and optimized database queries.</>,
          <>
            Worked with a team to enhance backend scalability and efficiency.
          </>,
          <>
            Integrated caching mechanisms and background task processing to
            enhance responsiveness.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Ukrainian startup",
        timeframe: "Jun 2024 - Nov 2024",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a web application for managing and displaying restaurant
            dishes.
          </>,
          <>Implemented full CRUD functionality for dish management.</>,
          <>Fixed UI bugs and improved user interface design.</>,
          <>Integrated Django Admin panel for efficient management.</>,
          <>
            Implemented role-based access control for managing customer orders.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Ternopil National Economic University \n Master's Degree \n Sep 2018 - Mar 2022",
        description: <>Mathematical and computer software system</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "SKILLS",
    skills: [
      {
        title: "Python Django",
        description: "",
        images: [],
      },
      {
        title: "Django Rest Framework",
        description: "",
        images: [],
      },
      {
        title: "HTML/CSS",
        description: "",
        images: [],
      },
      {
        title: "JS/Jquery",
        description: "",
        images: [],
      },
      {
        title: "OOP",
        description: "",
        images: [],
      },
      {
        title: "PostgreSQL",
        description: "",
        images: [],
      },
      {
        title: "GIT",
        description: "",
        images: [],
      },
      {
        title: "Docker",
        description: "",
        images: [],
      },
      {
        title: "AWS S3",
        description: "",
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    // {
    //   src: "/images/gallery/img-01.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-02.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-03.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-04.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-05.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-06.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-07.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-08.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-09.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-10.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-11.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-12.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-13.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-14.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
