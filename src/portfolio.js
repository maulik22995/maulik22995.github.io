/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello, World!",
  title2: "Maulik",
  logo_name: "Compiling Ideas into Reality",
  nickname: "harry / picleric",
  full_name: "Maulik Togadiya",
  subTitle: "A Senior Mobile App Developer specializing in Android & React Native.",
  resumeLink:
    "https://drive.google.com/file/d/1xgRwGBXBkSunmCxsHSTXQiOn0z69Jf53/view?usp=sharing",
  mail: "mailto:maulik22995@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/maulik22995",
  linkedin: "https://www.linkedin.com/in/maulik-togadiya/",
  gmail: "maulik22995@gmail.com",
  twitter: "https://twitter.com/maulik22995",
  instagram: "https://www.instagram.com/maulik__togadiya/",
};

const skills = {
  data: [
    {
      title: "Mobile Application Development",
      fileName: "FullStackImg",
      skills: [
       "⚡ Native Android development with Kotlin & Jetpack Compose",
       "⚡ Cross-platform mobile apps using React Native",
       "⚡ Clean architecture (MVVM) & performance optimization",
       "⚡ API integration & real-time databases (Firebase, GraphQL)",
       "⚡ CI/CD deployment & third-party service integration",
       "⚡ Optimizing app performance, memory usage, and battery efficiency",
       "⚡ Implementing third-party SDKs & cloud services like Firebase, AWS, and Google APIs",
      ],
      softwareSkills: [
        {
          skillName: "Android Java",
          fontAwesomeClassname: "devicon-plain:java-wordmark",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "KOTLIN",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#7F52FF",
          },
        },
        {
          skillName: "JETPACK COMPOSE",
          fontAwesomeClassname: "devicon-plain:jetpackcompose",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Hasmukh Goswami College of Engineering",
      subtitle: "Bachelor in Computer Science & Engineering",
      logo_path: "hgce.png",
      alt_name: "HGCE",
      duration: "2014 - 2017",
      descriptions: [
        "⚡ Studied core subjects including Computer Architecture, Operating Systems, Computer Networks, and more.",
        "⚡ Implemented several projects based on what I learned during my Computer Engineering course.",
        "⚡ Secured 8.5 CGPA.",
      ],
      website_link: "https://hgce.org/",
    },
    {
      title: "Vidhyanagar high school",
      subtitle: "higher school education",
      logo_path: "ssgandhy.png",
      alt_name: "SSGC",
      duration: "2012 - 2014",
      descriptions: [
        "⚡ Completed higher secondary education with 12th science stream.",
        "⚡ Studied core subjects including Physics, Chemistry, Mathematics, and more.",
        "⚡ Secured 80% in 12th science stream.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Major League Hacking",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter International Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Flutter International Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Projects & Contributions",
  description:"With 8+ years of experience in Android (Kotlin, Jetpack Compose) and React Native, I have worked on real-world projects from development to deployment. I also enjoy mentoring and sharing knowledge through workshops and discussions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Sr. Software Engineer",
          company: "MindInventory - AI-led Software Development Company",
          company_url: "https://www.mindinventory.com/",
          logo_path: "mi.jpg",
          duration: "Sep 2020 - Present",
          location: "Ahmedabad, Gujarat",
          description: `Led development of multiple projects across e-commerce, education, and healthcare domains. Architected and developed Android applications using Kotlin, Jetpack Compose, and React Native. Collaborated directly with clients to understand requirements and deliver scalable solutions. Managed end-to-end project lifecycle from development to deployment. Mentored junior developers and managed cross-functional teams. Optimized app performance, implemented CI/CD pipelines, and integrated third-party services including Firebase, AWS, and Google APIs.`,
          color: "#0071C5",
        },
        {
          title: "Android Developer",
          company: "TriState Technology",
          company_url: "https://www.tristatetechnology.com/",
          logo_path: "tristate.jpeg",
          duration: "May 2017 - Jul 2020",
          location: "Ahmedabad, Gujarat",
          description: `Started my career as an Android Developer, responsible for developing and maintaining Android applications using Java and Kotlin. Worked on multiple client projects, contributing to the company's success while gaining hands-on experience in mobile app development, API integration, and software engineering best practices.`,
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have developed numerous projects across various domains for clients, working with Android (Java, Kotlin) and hybrid technologies like React Native. Most projects are client-based and not available on my GitHub, but I have shared some sample code in my repositories.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "maulik-profile.png",
    description: "Reach out to me for inquiries, collaborations, or a tech chat. I'll respond as soon as possible!",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I write occasionally, sharing insights and cool discoveries. Check them out!",
    link: "https://medium.com/@maulik_togadiya",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Uptaste",
      subtitle: "Tiffin based subscription service",
      image: "/uptaste/bg.png",
      screenshots: [
        "/uptaste/1.png",
        "/uptaste/2.png",
        "/uptaste/3.png",
        "/uptaste/4.png",
        "/uptaste/5.png",
        "/uptaste/6.png",
        "/uptaste/7.png",
      ],
      description:
        "A comprehensive food ordering and tiffin subscription service where users can subscribe to lunch and dinner packages (15 or 30 days). Features include: \n ✓ Meal selection with type and time preferences\n ✓ Filter meals by categories (Mexican, Indian, Continental, etc.)\n ✓ Apply coupon codes for discounts\n ✓ Multiple payment options (Online payment, COD)\n ✓ PDF invoice generation\n ✓ Wallet money management system",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "cib:kotlin",
        }
      ],
      links: [
        {
          name: "Live Demo",
          url:
            "https://uptaste.in/",
          iconifyClass: "mdi:web",
        }
      ],
    },
    {
      id: "1",
      name: "Yardie",
      subtitle: "On Demand Lawn Mowing and Gardening Service",
      image: "/yardie/bannerBG.png",
      screenshots: [
        "/yardie/1.jpg",
        "/yardie/2.jpg",
        "/yardie/3.jpg",
        "/yardie/4-1.jpg",
        "/yardie/4.jpg",
        "/yardie/5.jpg",
        "/yardie/6.jpg",
        "/yardie/6-1.jpg",
        "/yardie/7.jpg",
        "/yardie/8.jpg",
        "/yardie/9.jpg",
        "/yardie/10.jpg",
        "/yardie/11.jpg",
        "/yardie/12.jpg",
        "/yardie/13.jpg",
      ],
      description:
        "Yardie offers fast, easy, and reliable lawn mowing and gardening solutions at your fingertips. Whether the job involves cutting, pruning, or cleaning the yard, a reliable Yardie Partner will handle it all while you sit back, relax, and enjoy. Get notified when the job is accepted, started, and completed. Simply approve the work and pay the Yardie partner directly from the app.",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "cib:kotlin",
        }
      ],
      links: [
      ],
    },
    {
      id: "2",
      name: "Zoomin: Frames, Prints & Gifts",
      subtitle: "Photo printing app",
      image: "/zoomin/logo.webp",
      screenshots: [
        "/zoomin/1.webp",
        "/zoomin/2.webp",
        "/zoomin/3.webp",
        "/zoomin/4.webp",
      ],
      description:
        "Print photos onto anything - Photo Books, Collage Posters, Photo Prints, Calendars, Mugs, Magnets, Home Decor, Custom Bag Tags, and more. This app provides customization as easy as clicking a button. Perfect for when you're looking to change your decor, treat a friend, or just put a smile on your face.",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "cib:kotlin",
        }
      ],
      links: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.zoomin.zoominphotoprints&hl=en_IN",
          iconifyClass: "mage:playstore",
        }
      ],
    },
    {
      id: "2",
      name: "BellaHealth",
      subtitle: "Rapid Covid-19 Health Checkup App",
      image: "/bellahealth/bg.png",
      screenshots: [
        "/bellahealth/1.png",
        "/bellahealth/2.png",
        "/bellahealth/3.png",
        "/bellahealth/4.png",
        "/bellahealth/5.png",
        "/bellahealth/6.png",
        "/bellahealth/7.png",
        "/bellahealth/8.png",
        "/bellahealth/9.png",
        "/bellahealth/10.png",
        "/bellahealth/11.png",
        "/bellahealth/12.png",
        "/bellahealth/13.png",
        "/bellahealth/14.png",
        "/bellahealth/15.png",
        
      ],
      description:
        "This application provides a simple, intuitive way to test for COVID-19 in the privacy of your own home. This conversational experience is connected to the Quidel QuickVue OTC At-Home COVID-19 test. By following the conversational tutorials with an application, you’ll have step-by-step support to take your test with confidence.",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "cib:kotlin",
        }
      ],
      links: [
        
      ],
    },
    {
      id: "4",
      name: "Oriscene",
      subtitle: "Social networking app",
      image: "/oriscene/bg.png",
      screenshots: [
        "/oriscene/1.png",
        "/oriscene/2.png",
        "/oriscene/3.png",
        "/oriscene/6.png",
        "/oriscene/7.png",
        "/oriscene/8.png",
        "/oriscene/9.png",
        "/oriscene/10.png",
        "/oriscene/11.png",
        "/oriscene/12.png",
        "/oriscene/13.png",
        
      ],
      description:
        "Today's world it is all about digital information. You have it. They want it. Oriscene helps to make that happen. Share your posts, photos, and videos like you already do. With Oriscene you’ll watch as they rise or fall in rank according to how you and fellow users rate what you see. This application is about sharing and selling the digital information to the world and brings sellers and buyers under a single platform. So that the users don’t have to switch apps when they want to avail or sell their digital media. This application uses extraordinary UI/UX features which are user friendly and very easy to use.Moreover, in this application user could register themselves as Buyer, Seller or Both. Also, this application uses Orcoins – currency and that could be purchased from in-app purchases.",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "cib:kotlin",
        },
        {
          name: "Android Java",
          iconifyClass: "fluent:document-java-16-regular",
        }
      ],
      links: [
        
      ],
    },
    {
      id: "5",
      name: "Jodi",
      subtitle: "Dating app",
      image: "/jodi/bannerBG.png",
      screenshots: [
        "/jodi/1.png",
        "/jodi/2.png",
        "/jodi/3.png",
        "/jodi/4.png",
        "/jodi/5.png",
        "/jodi/6.png",
        "/jodi/7.png",
        
      ],
      description:
        "JODI is a unique dating application that allows friends and family to participate in the matchmaking process. Your friends can track their matchmaking success with Sidekick stats showing the number of matches you've approved. This ensures they're choosing the right people for you to connect with. Once a match is suggested, only you can complete the match and begin communication if the other person accepts. If you know friends or family looking for a date, become a Sidekick user and help find matches for them. You can choose not to be in the singles feed while still helping your friends find perfect matches. There's someone for everyone!",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "cib:kotlin",
        },
      ],
      links: [
        
      ],
    },
    {
      id: "6",
      name: "Readrly",
      subtitle: "Education app",
      image: "/readrly/bg.png",
      screenshots: [
        "/readrly/1.png",
        "/readrly/2.png",
        "/readrly/3.png",
        "/readrly/4.png",
        "/readrly/5.png",
        "/readrly/6.png",
        "/readrly/7.png",
        "/readrly/8.png",
        "/readrly/9.png",
        "/readrly/10.png",
        "/readrly/11.png",
        
      ],
      description:
        "An educational app designed specifically for children aged 5-11 years, covering primary school classes 1-6. Upon selecting their grade, users access age-appropriate content related to Vocabulary, Fluency, Decoding, Comprehension, and Leadership. Children can engage in interactive lessons, earn points, and receive badges upon completing different levels. The Leadership section includes a leaderboard showcasing users' scores based on completed challenges, fostering achievement and healthy competition.",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "cib:kotlin",
        },
        {
          name : "Jetpack compose",
          iconifyClass: "devicon-plain:jetpackcompose",
        }
      ],
      links: [
        
      ],
    },
    {
      id: "7",
      name: "Jetson",
      subtitle: "Startup Simulator",
      image: "/jetson/bg.jpeg",
      screenshots: [
        "/jetson/1.webp",
        "/jetson/2.webp",
        "/jetson/3.webp",
        "/jetson/4.webp",
        "/jetson/5.webp",
        "/jetson/6.webp",
        "/jetson/7.webp",
        "/jetson/8.webp",
        "/jetson/9.webp",
        "/jetson/10.webp",
        "/jetson/11.webp",
        
      ],
      description:
        "Grow an idea into your dream business with Jetson, the ultimate business accelerator for aspiring entrepreneurs! Jetson is a fun, free way for entrepreneurs to create sound business strategies, role-play key stakeholder conversations and learn the tactics/terms of entrepreneurship. Navigate the thrilling journey from idea to IPO through immersive role-playing, and learn about startup buzzwords, technology case studies, product development, venture capital, artificial intelligence, business strategy, and more.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "simple-icons:react",
        },
        {
          name: "Redux",
          iconifyClass: "simple-icons:redux",
        },
      ],
      links: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=io.trystack.Stack.android&hl=en_IN",
          iconifyClass: "mage:playstore",
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/jetson-startup-simulator/id1621242994?mt=8",
          iconifyClass: "simple-icons:apple",
        }
      ],
    },
    {
      id: "8",
      name: "Tokol",
      subtitle: "Doctor/Patient app",
      image: "/tokol/bg.png",
      screenshots: [
        "/tokol/1.png",
        "/tokol/2.png",
        "/tokol/3.png",
        "/tokol/4.png",
        "/tokol/5.png",
        "/tokol/6.png",
        "/tokol/7.png",
        "/tokol/8.png",
        "/tokol/9.png",
        
      ],
      description:
        "Tokol is a doctor-patient app where doctors can invite patients to register and assign personalized protocols consisting of multiple tasks. These tasks may include measuring weight, taking medication, and more. Patients can update their progress, allowing doctors to monitor and track their health information effectively.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "simple-icons:react",
        },
        {
          name: "Redux",
          iconifyClass: "simple-icons:redux",
        },
        {
          name: "tRPC",
          iconifyClass: "simple-icons:trpc",
        },
      ],
      links: [
        
      ],
    },
    {
      id: "9",
      name:"Vorsa",
      subtitle:"training companion for football players",
      image: "/vorsa/bg.webp",
      screenshots: [
        "/vorsa/1.png",
        "/vorsa/2.png",
        "/vorsa/3.png",
        "/vorsa/4.png",
        "/vorsa/5.png",
        "/vorsa/6.png",
        "/vorsa/7.png",
        "/vorsa/8.png",
        "/vorsa/9.png",
        "/vorsa/10.png",
        "/vorsa/11.png",
        "/vorsa/12.png",
        "/vorsa/13.png",
        "/vorsa/14.png",
        "/vorsa/15.png",
        "/vorsa/16.png",
        "/vorsa/17.png",
        "/vorsa/18.png",
        "/vorsa/19.png",
      ],
      description:
        "Vorsa is a training companion for football players who want structure, clarity and consistent support in their development.The app enables players to upload practice videos, complete assigned drills and receive personalised feedback from their coach.Everything is organised in one place so that players can focus on improving their game rather than managing their workload.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "simple-icons:react",
        },
        {
          name:"Next JS",
          iconifyClass: "simple-icons:nextdotjs",
        }],
        links: [
          {
            name: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.vorsa.football",
            iconifyClass: "mage:playstore",
          },
          {
            name: "Live Demo",
            url:
              "https://www.vorsa.app/",
            iconifyClass: "mdi:web",
          }
        ],
    },{
      id: "10",
      name:"Fint Invest",
      subtitle:"Investment app",
      image: "/fint/bg.webp",
      screenshots: [
        "/fint/1.png",
        "/fint/2.png",
        "/fint/3.png",
        "/fint/4.png",
        "/fint/5.png",
        "/fint/6.png",
        "/fint/7.png",
        "/fint/8.png",
        "/fint/9.png",
        "/fint/10.png",
      ],
      description:
      "Fint helps you invest with confidence from day one. It’s easy to feel overwhelmed by all the noise and hype around investing. Fint makes your first step simple - no jargon, no guesswork. Just straightforward portfolios designed for long-term growth.Fints Investment portfolios are built using expert-selected Exchange Traded Funds (ETFs) - collections of investments combined into a single fund - designed to support long-term growth and help manage risk.Portfolio themes add a ‘tilt’ to your investment - a small focus on areas like AI, gaming, or clean energy, while keeping the rest of your investment spread across global markets and forward-thinking companies.Think of it like tilting a scale: you’re giving more weight to an industry you believe in, without putting all your eggs in one basket.",
    languages: [
      {
        name: "React Native",
        iconifyClass: "simple-icons:react",
      }],
      links: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.ironmarketltd.fint&hl=en",
          iconifyClass: "mage:playstore",
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/gb/app/fint-invest/id6464298163",
          iconifyClass: "simple-icons:apple",
        }
      ],
    }
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
