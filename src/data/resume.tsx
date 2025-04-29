import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anshul Kanswal",
  initials: "AK",
  url: "https://anshul.io",
  location: "Noida, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  metaDescription: "Building OffScript | Advocate @HackQuest | Web3 enthusiast | Pursuing B.Tech in CSE-AIML @JSS University",
  description:
    <div>
      <div className="typewriter-container">
        <div className="typewriter-line" data-text="Debugging Dreams & Deploying Vibes."></div>
        <div className="typewriter-line" data-text="Curious by Nature, Driven by Passion."></div>
        <div className="typewriter-line" data-text="Code, Create, Inspire."></div>
        <div className="typewriter-line" data-text="Never Settling, Always Evolving."></div>
      </div>
      <div>
        <br />
        Building OffScript | Advocate @HackQuest | Web3 enthusiast | Pursuing B.Tech in CSE-AIML @JSS University
      </div>
    </div>,
  summary:
    "Since 2024, I've been exploring technologies and engaging in the Web3 space while pursuing a B.Tech in CSE-AIML at JSS University. I'm passionate about building communities and contributing to impactful projects. As an Advocate at HackQuest, I engage with the tech community, sharing knowledge on Web3 and AI. Additionally, as a Community Growth Manager at OffScript, I design strategies to grow a vibrant community of creators through interactive events and collaborations.",
  avatarUrl: "/profile.jpg",
  skills: { 
    Languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "C",
      "Solidity",
      "MySQL",
      "HTML",
      "CSS"
    ],
    Frameworks: [
      "React",
      "Magic UI",
      "Gaia"
    ],
    Platforms: [
      "Linux",
      "Windows",
      
    ],
    Tools: [
      "VS Code",
      "Figma",
      "Canva",
      "PowerPoint",
      "Notion",
      "Github",
      "Medium",
    ],
    "Soft Skills": [
      "Leadership",
      "Public Speaking",
      "Problem Solving",
      "Team Collaboration",
      "Community Management",
      "Event Management"
    ]
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "Anshulkanswal01@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AnshulK-01",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anshul-kanswal/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AnshulKanswal01",
        icon: Icons.x,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@anshulkanswal01",
        icon: Icons.medium,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:Anshulkanswal01@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "OffScript",
      location: "Part-Time",
      title: "Community Growth Manager",
      logoUrl: "/off.png",
      start: "March 2025",
      end: "Present",
      description:
        "At OffScript, I&apos;m focused on building and growing a vibrant community of creators, thinkers, and innovators. I design and execute community engagement strategies, host interactive sessions and events that bring real value, and collaborate with like-minded people to foster growth.",
      href: "",
      badges: [],
    },
    {
      company: "HackQuest",
      href: "https://hackquest.io/en",
      location: "Part-Time",
      title: "Advocate",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQGuDE8YLNwbJw/company-logo_200_200/company-logo_200_200/0/1702587639078?e=1750896000&v=beta&t=E40Ux68q8rwq8lB4XdqyVJbbHu5arsv4AqjxRebKeEE",
      start: "Nov 2024",
      end: "Present",
      description:
        "As an Advocate at HackQuest, I am excited to engage with the dynamic tech community and contribute to its growth. My role involves learning and sharing knowledge about Web3 and AI technologies, collaborating with like-minded individuals, and participating in exclusive events and projects. Through this program, I aim to promote innovation, foster connections, and grow my expertise while helping others navigate the exciting world of decentralized technologies.",
      badges: [],
    },
      
  ],

  education: [
    {
      school: "JSS University, Noida",
      href: "https://jssuninoida.edu.in/",
      degree: "B.tech CSE-AIML",
      logoUrl: "/jss.png",
      start: "2024",
      end: "Present",
    },
    {
      school: "AVB Public School",
      href: "https://avbps.in/",
      degree: "Schooling",
      logoUrl: "/avb.png",
      start: "2010",
      end: "2024",
    },
  ],
  
  projects: [
    {
      title: "Data Roots",
      href: "https://data-roots.vercel.app/",
      dates: "March 17th - 18th, 2025",
      active: true,
      description:
        "Data Roots — Built during the EduChain Hack, Data Roots is a decentralized platform that enables users to store, share, and monetize their data securely using blockchain technology. Our project focused on giving users full control over their data ownership and privacy.",
      technologies: [
        "Solidity",
        "Html",
        "Css",
        "JavaScript",
        "Solidity",
        "Pinata",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://data-roots.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Anime Generator",
      href: "https://anime-generator-two.vercel.app/",
      dates: "April 2025",
      active: true,
      description:
        "Made a simple anime generator for fun using HTML, CSS and JavaScript on 1st April 2025 to prank my friends.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://anime-generator-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "E-vyapaar",
      href: "https://e-vyapar.vercel.app/",
      dates: "March 2025",
      active: true,
      description:
        "E-vyapaar — A frontend project developed using HTML, CSS, and JavaScript to help small vendors and businesses modernize their operations. The platform provides a user-friendly interface for managing inventory, tracking sales, and connecting with customers.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://e-vyapar.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Suraksha Mitra",
      href: "https://surasha-mitra.vercel.app/",
      dates: "March 2025",
      active: true,
      description:
        "I worked on a cybersecurity project named Suraksha Mitra, which is designed to help users stay safe online by analyzing potentially harmful digital content. This project aims to make cybersecurity more accessible and understandable for everyday users. Suraksha Mitra is capable of scanning both links and files to detect vulnerabilities or threats.",
      technologies: [
        "HTML",
        "CSS",  
        "JavaScript",
        "VirusTotal",
      ],
      links: [
        {
          type: "Website",
          href: "https://surasha-mitra.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AnshulK-01/Surasha-Mitra",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MineFind",
      href: "https://github.com/yashgupta184/MineFind",
      dates: "Jan 24th - Feb 7th, 2025",
      active: true,
      description:
        "MineFind — A cybersecurity project developed at CDAC, Noida, focused on detecting unauthorized cryptomining activities on systems. It automatically identifies, monitors, and blocks suspicious mining processes, helping safeguard system performance and security.",
      technologies: [
        "Psutil",
        "Yara",
        "Nmap",
        "Flask",
        "Python"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/yashgupta184/MineFind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SmartFlow",
      dates: "Feb 2025",
      href: "https://www.figma.com/proto/DpClPgYIyehOjWRPaKiItO/SMARTFLOW?node-id=218-431&t=cBjt1pbKvPjvKpeY-1",
      active: true,
      description:
        "During the WeIgnite 2.0 Hackathon organized by IGDTUW, our team worked on an innovative project aimed at addressing the persistent issue of urban traffic congestion. As part of this initiative, we developed a Minimum Viable Product (MVP) using Figma—a digital prototype that showcased a smart traffic management system designed to streamline vehicular movement in metropolitan areas.",
      technologies: [
        "Figma",
        "Canva",
      ],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/proto/DpClPgYIyehOjWRPaKiItO/SMARTFLOW?node-id=218-431&t=cBjt1pbKvPjvKpeY-1",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "YouTube",
          href: "https://youtu.be/dkbvUPxnHs8",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/sf.png",
      video:
        "https://youtu.be/dkbvUPxnHs8",
    },

  ],

  hackathons: [
    {
      title: "Educhain Delhi Regional Hackathon",
      dates: "March 17th - 18th, 2025",
      location: "Delhi, India",
      description:
        "We built Data Roots during the EduChain Hack as a decentralized platform that empowers users to store, share, and monetize their data securely using blockchain technology. Also secured 3rd position in the hackathon.",
      image: "/educhain.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://data-roots.vercel.app/",
        },
      ],
    },
    {
      title: "Mini Project Event conducted under ISEA Project Phase III",
      dates: "Jan 24th - Feb 7th, 2025",
      location: "CDAC, Noida",
      description:
        "We secured 3rd place at the Cybersecurity Bootcamp organized by CDAC Noida for our project focused on preventing cryptojacking — a rising cyber threat where attackers exploit computing resources without consent",
      image: "/cdac.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/yashgupta184/MineFind",
        },
      ],
    },
  ],

  highlights: [
    {
      id: 1,
      title: "Future Tech Summit '25",
      description: "Volunteered at the prestigious Future Tech Summit '25 at India Habitat Centre, engaging with startup founders and ecosystem enablers. Interacted with notable guests including Chhaya Chauhan, Shardul Rao, and other industry leaders.",
      link: "https://www.linkedin.com/posts/anshul-kanswal_futuretechsummit25-jssstep-indiahabitatcentre-activity-7321847799954710529-3lGT",
      date: "April 24, 2025"
    },
    {
      id: 2,
      title: "Educhain Delhi Regional Hackathon",
      description: "Participated in the Educhain Delhi Regional Hackathon, building innovative solutions using blockchain technology. Collaborated with talented developers and learned from industry experts.",
      link: "https://www.linkedin.com/posts/anshul-kanswal_blockchaininnovation-web3builders-hackathonjourney-activity-7308551672845242368-JFj9",
      date: "March 2025"
    },
    {
      id: 3,
      title: "HackQuest Workshop @MSCW",
      description: "Shared insights about my journey as a HackQuest Advocate and the impact of Web3 education.",
      link: "https://www.linkedin.com/posts/anshul-kanswal_hackquest-web3-blockchain-activity-7299506703279030272-CFoS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFbWC0BRNih9A1EpJXuLXiYGDiVS50KTT4",
      date: "February 2025"
    },
    {
      id: 4,
      title: "CDAC Cybersecurity Bootcamp",
      description: "Reflected on my experience at the CDAC Cybersecurity Bootcamp and our project MineFind.",
      link: "https://www.linkedin.com/posts/prof-dr-dhiraj-pandey-4708682bb_congratulations-to-our-first-year-students-activity-7293997220498915328-mCRd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFbWC0BRNih9A1EpJXuLXiYGDiVS50KTT4",
      date: "January 2025"
    },
    {
    id: 5,
    title: "Exclusive graduation swags from HackQuest",
    description: "Received exclusive graduation swags from HackQuest as a part of my journey as a HackQuest Advocate.",
    link: "https://www.linkedin.com/posts/anshul-kanswal_hackquest-web3development-communitylearning-activity-7282373571434201088-nSQl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFbWC0BRNih9A1EpJXuLXiYGDiVS50KTT4",
    date: "Dec 2024"
  },
  {
    id: 6,
    title: "Organized GAIAMeetup @HackQuest",
    description: "Organized GAIAMeetup @HackQuest, a community event focused on blockchain technology and Web3 development.",
    link: "https://www.linkedin.com/posts/anshul-kanswal_gaiameetup-hackquest-blockchain-activity-7267456210491056128-pVaR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFbWC0BRNih9A1EpJXuLXiYGDiVS50KTT4",
    date: "Nov 2024"
  },
  {
    id: 7,
    title: "Invited to CIC, Delhi for Eyantra- IITB",
    description: "CIC, Delhi for Eyantra- IITB, a national level competition for students to showcase their innovative ideas.",
    link: "https://www.linkedin.com/posts/anshul-kanswal_innovation-eyantra-cic-activity-7250383366716334080-TeAy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFbWC0BRNih9A1EpJXuLXiYGDiVS50KTT4",
    date: "Oct 2024"
  },
  ],
} as const;
