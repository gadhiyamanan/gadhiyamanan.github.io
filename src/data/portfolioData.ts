export interface Project {
  id: string
  title: string
  description: string
  androidUrl?: string
  iosUrl?: string
  category: string
  icon?: string
  fullDescription?: string
  screenshots?: string[]
}

export const portfolioData = {
  name: "Manan Gadhiya",
  title: "Senior React Native Developer",
  email: "gadhiyamanan18@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/manan-gadhiya-4582b1182/",
    github: "https://github.com/gadhiyamanan",
    stackoverflow: "https://stackoverflow.com/users/13732190/manan-gadhiya"
  },
  tagline:
    "Building world-class mobile apps with React Native & Expo — focusing on smooth UX, modern design patterns, and reliable performance.",
  profilePic: "/assets/profile.png",
  skills: [
    { name: "React Native CLI", category: "Core" },
    { name: "Expo", category: "Core" },
    { name: "TypeScript", category: "Core" },
    { name: "JavaScript", category: "Core" },
    { name: "Redux", category: "State Management" },
    { name: "MobX", category: "State Management" },
    { name: "Firebase", category: "Backend" },
    { name: "Supabase", category: "Backend" },
    { name: "Sockets", category: "Communication" }
  ],
  projects: [
    {
      id: "ifal",
      title: "𝗶𝗳𝗮𝗹",
      description:
        "Learn English online with a smooth, interactive experience.",
      fullDescription:
        "I-fal is a provider of an online learning platform that offers educational services designed to meet the needs of all students at various levels of ability using our fun, innovative, and interactive 25-minute video lessons with our well-experienced and professional tutors via Zoom.\n\nOur teachers are devoted to developing detailed courses that suit the student's needs to boost our student's English proficiency.\n\nAt i-fal, we provide regular classes to all the students who have access to the internet at a convenient time. In this way, you will be able to see the progress of the student's English proficiency. The class schedule is flexible, thus, you can add your schedule at your convenience.\n\nDuring each class, your tutor will carefully take note of your pronunciation, grammar, language communication, and mistakes without interfering with students expressing their ideas and opinions. A personalized class report that consists of your mispronounced words and grammar lapses will be sent after every lesson.\n\nYou may review it later to keep track of your progress.",
      androidUrl: "https://play.google.com/store/apps/details?id=com.i_fal",
      iosUrl:
        "https://apps.apple.com/il/app/ifal-learn-english-online/id1535918494",
      category: "Education",
      screenshots: [
        "/assets/projects/ifal/ifal_1.jpg",
        "/assets/projects/ifal/ifal_2.jpg",
        "/assets/projects/ifal/ifal_3.jpg",
        "/assets/projects/ifal/ifal_4.jpg",
        "/assets/projects/ifal/ifal_5.jpg",
        "/assets/projects/ifal/ifal_6.jpg",
        "/assets/projects/ifal/ifal_7.jpg",
        "/assets/projects/ifal/ifal_8.jpg"
      ]
    },
    {
      id: "babylon-park",
      title: "𝗕𝗮𝗯𝘆𝗹𝗼𝗻 𝗣𝗮𝗿𝗸",
      description: "Enjoy games and entertainment at Babylon Park.",
      fullDescription:
        "Play video games at Babylon Park, the worlds best indoor amusement parks network.",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.playlabels",
      iosUrl: "https://apps.apple.com/us/app/בבילון-פארק/id1438993034",
      category: "Entertainment",
      screenshots: [
        "/assets/projects/babylon-park/babylon-park_1.jpg",
        "/assets/projects/babylon-park/babylon-park_2.jpg",
        "/assets/projects/babylon-park/babylon-park_3.jpg",
        "/assets/projects/babylon-park/babylon-park_4.jpg",
        "/assets/projects/babylon-park/babylon-park_5.jpg",
        "/assets/projects/babylon-park/babylon-park_6.jpg",
        "/assets/projects/babylon-park/babylon-park_7.jpg"
      ]
    },
    {
      id: "wesmoke",
      title: "𝗪𝗲𝘀𝗺𝗼𝗸𝗲",
      description: "A social community for smokers.",
      fullDescription:
        "WeSmoke is a social media mobile application that has been created to provide a space where the cannabis community can share their experiences and lifestyle through images and videos, as well as become educated on cannabis information and current events. We provide our users the opportunity of participating in a virtual/online cultural community where all the members share the same interest and passion for cannabis. WeSmoke is a lifestyle community that is committed to providing an inclusive, caring, and supportive environment where the cultural perspectives and ethos of the cannabis community is valued. WeSmoke will continue to offer a variety of pathways to meet the needs of our users. It is a company that is poised to create a reputation for putting the cannabis community first, understanding the needs of our users and delivering relevant and timely information regarding the evolution of the cannabis movement in the US and worldwide.",
      iosUrl: "https://apps.apple.com/us/app/wesmoke/id1577787304",
      category: "Social",
      screenshots: [
        "/assets/projects/wesmoke/wesmoke_1.jpg",
        "/assets/projects/wesmoke/wesmoke_2.jpg",
        "/assets/projects/wesmoke/wesmoke_3.jpg",
        "/assets/projects/wesmoke/wesmoke_4.jpg"
      ]
    },
    {
      id: "ickonic",
      title: "𝗜𝗰𝗸𝗼𝗻𝗶𝗰",
      description: "Premium media and streaming content platform.",
      fullDescription:
        "UNLIMITED FILMS, SERIES, PODCASTS AND LIVE EVENTS...\n\nHard Hitting News, Life Transforming Series and Films that empower you to take control of your Life, Health and Well-Being.\n\n\nBecome part of the Alternative - Brand New Media Movement.\n\n\nBrand New Content Every Day, New Series and Films Every Month on everything from Science, Politics, Health, Music, Comedy and more...",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.ickonic.ickonicandroid",
      iosUrl: "https://apps.apple.com/us/app/ickonic/id1551307977",
      category: "Media",
      screenshots: [
        "/assets/projects/ickonic/ickonic_1.jpg",
        "/assets/projects/ickonic/ickonic_2.jpg",
        "/assets/projects/ickonic/ickonic_3.jpg",
        "/assets/projects/ickonic/ickonic_4.jpg",
        "/assets/projects/ickonic/ickonic_5.jpg"
      ]
    },
    {
      id: "zerocater-partners",
      title: "𝗭𝗲𝗿𝗼𝗖𝗮𝘁𝗲𝗿 𝗣𝗮𝗿𝘁𝗻𝗲𝗿𝘀",
      description: "Corporate catering made simple and efficient.",
      fullDescription:
        "ZeroCater Partners can manage and track their meal deliveries in real time. ",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.zerocater.cp",
      iosUrl: "https://apps.apple.com/us/app/zerocater-partners/id1547752180",
      category: "Food & Beverage",
      screenshots: [
        "/assets/projects/zerocater-partners/zerocater-partners_1.jpg",
        "/assets/projects/zerocater-partners/zerocater-partners_2.jpg",
        "/assets/projects/zerocater-partners/zerocater-partners_3.jpg",
        "/assets/projects/zerocater-partners/zerocater-partners_4.jpg"
      ]
    },
    {
      id: "paint-ready",
      title: "𝗣𝗮𝗶𝗻𝘁 𝗥𝗲𝗮𝗱𝘆",
      description: "On-demand painting and home services.",
      fullDescription:
        "For Clients: Book, manage & reschedule paint & repair appointments. View upcoming jobs, track progress & ensure a flawless finish for your property.For Technicians & Team Leads: Manage jobs efficiently, receive assignments, track progress & collaborate seamlessly for optimal service delivery.Key Features:Easy appointment booking & scheduling for clients.Job management tools for technicians & team leads.Real-time job progress tracking.Secure client property portal.",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.cutting_edge",
      iosUrl: "https://apps.apple.com/us/app/paint-ready/id6480466893",
      category: "Services",
      screenshots: [
        "/assets/projects/paint-ready/paint-ready_3.jpg",
        "/assets/projects/paint-ready/paint-ready_7.jpg",
        "/assets/projects/paint-ready/paint-ready_1.jpg",
        "/assets/projects/paint-ready/paint-ready_2.jpg",
        "/assets/projects/paint-ready/paint-ready_4.jpg",
        "/assets/projects/paint-ready/paint-ready_5.jpg",
        "/assets/projects/paint-ready/paint-ready_6.jpg"
      ]
    }
  ] as Project[],
  whyMe: [
    {
      title: "Fast Communication",
      icon: "MessageCircle",
      text: "Clear and proactive communication ✉️"
    },
    {
      title: "Top Performance",
      icon: "Zap",
      text: "Pixel-perfect UI and smooth apps 🎯"
    },
    {
      title: "Clean Code",
      icon: "Code",
      text: "Scalable architecture and best practices ⚙️"
    },
    {
      title: "On-time Delivery",
      icon: "Clock",
      text: "Reliable timelines and suggestions ⏱️"
    }
  ]
}
