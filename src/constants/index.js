// yahan pr hamara sara data hoga:

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "resume",
    name: "Resume", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  // {
  //   id: "trash",
  //   name: "Archive", // was "Trash"
  //   icon: "trash.png",
  //   canOpen: false,
  // },
];

const blogPosts = [
  {
    id: 1,
    date: "March 3, 2026",
    title:
      "From Scratch to Pixels: Building a High-Performance JavaScript Image Editor",
    image: "/images/blog1.png",
    link: "https://canvas-image-editor.blogspot.com/2026/03/building-browser-based-image-editor-no.html",
  },
  {
    id: 2,
    date: "Feb 28, 2025",
    title: "State Management in Vanilla JS: Creating a Persistent Task Manager",
    image: "/images/blog2.png",
    link: "https://task-management-application.blogspot.com/2026/03/building-drag-and-drop-task-manager.html",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["HTML", "Javascript", "React.js"],
  },
  // {
  //   category: "Mobile",
  //   items: ["React Native", "Expo"],
  // },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS", "Bootstrap"],
  },
  // {
  //   category: "Backend",
  //   items: ["Node.js", "Express", "NestJS", "Hono"],
  // },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Fahads-Code",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    // link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    // link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    // link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Image Editor",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [

        {
          id: 2,
          name: "image-editor.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://fahads-code.github.io/Image-Editor",
          position: "top-10 left-10",
        },
        {
          id: 4,
          name: "Image Editor Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-80",
          description: [
            "A fully browser-based Image Editor built with vanilla JavaScript and the HTML5 Canvas API — no frameworks, no dependencies, just clean code.",
            "It supports real-time image manipulation including filters, custom editing, and download functionality, all running entirely in the browser without any server-side processing.",
          ],
        },

      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Task Management Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-45",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Task Management Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-50",
          description: [
            "I built a Task Management Application with a clean drag-and-drop interface for organizing tasks across custom columns.",
            "Instead of juggling sticky notes or complex tools, you get a smooth board where tasks can be created, moved, and deleted in real time.",
            "Think of it like a personal Trello — but built entirely from scratch using vanilla HTML, CSS, and JavaScript.",
            "All your tasks are saved automatically in the browser's localStorage, so your data stays intact even after closing or refreshing the page.",
          ],
        },
        {
          id: 2,
          name: "Task Management Application",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://fahads-code.github.io/To-Do-App",
          position: "top-10 left-10",
        },
      ],
    },



  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      subtitle: "Frontend Developer",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I'm Fahad 👋, a frontend developer who loves building clean, responsive interfaces that are as smooth as they look.",
        "I work with HTML, CSS, JavaScript, Tailwind CSS, React — turning designs into fast, functional, and delightful web experiences.",
        "I'm big on clean UI, good UX, and writing code that's easy to read, maintain, and actually makes sense the next morning.",

      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  // trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };