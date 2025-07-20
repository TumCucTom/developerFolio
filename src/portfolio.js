/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static image
};

const greeting = {
  username: "Holly Wilson",
  title: "Hi, my name is Holly Wilson",
  subTitle: emoji(
    "I'm a Dental student, currently intercalating in BSc Functional and Clinical Anatomy. However, I have a passion to pursue multiple dreams simultaneously; alongside excelling in dental school, I have also trained for Ironman triathlons & marathons, travelled over 30 countries independently, and have successfully begun my own business- 'HappyHealthyHols' 🚀"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/hollywilson/",
  gmail: "happyhealthyhols@gmail.com",
  instagram: "https://www.instagram.com/happyhealthyhols?igsh=MWx3OWhrZ2ViNnJ2&utm_source=qr",
  tiktok: "https://www.tiktok.com/@hwilsonnnnnn?_t=ZN-8y3U0EM7w3C&_r=1",
  youtube: "https://youtube.com/@happyhealthyhols?si=jIEjPRAodotGRrmc",
  strava: "https://strava.app.link/H1McqByW1Ub",
  linktree: "https://linktr.ee/Hollyfitness02?fbclid=PAQ0xDSwLjgNMBpgPxneFHqCpMddNy47OYO0gDfF8TqvXfyXv65I3SFZtcAln9b_hT6kym9A_aem_AU47-Z5in9dnfEpap2FMK_Ane2zhNahzI9BasRw9QV06WwM86mNJmirS9i0LfXPmsI8",
  // gitlab: "https://gitlab.com/hollywilson",
  // facebook: "https://www.facebook.com/holly.wilson",
  // medium: "https://medium.com/@hollywilson",
  // stackoverflow: "https://stackoverflow.com/users/hollywilson",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "DENTAL STUDENT, ATHLETE, TRAVELER & ENTREPRENEUR",
  description: [
    "Hi, my name is Holly Wilson, and I'm a Dental student, currently intercalating in BSc Functional and Clinical Anatomy. However, I have a passion to pursue multiple dreams simultaneously; alongside excelling in dental school (achieving the highest achiever in Health Sciences in Year 1, and an average of 80.5% in my end of year exams to date), I have also trained for Ironman triathlons & marathons, travelled over 30 countries independently, and have successfully begun my own business- 'HappyHealthyHols' both working with huge brands on social media in marketing, such as Adidas and Speedo, and also hosting group trips for up to 32 individuals, bringing together likeminded people through the experience of exploring new countries/trying a new challenge.",
    "With a combined following of over 110,000, my social media pages aim to bring smiles (in a different way to dentistry!) to a global audience of millions monthly, across Instagram, TikTok, and YouTube, inspiring others who are also in full time education/ employment to maximise their free time and annual leave- working to LIVE rather than living to work. I also use the platforms to raise money for charities when I compete in sporting events, and to educate others on the risks of oral health deterioration in endurance sports- a topic I would love to investigate further in the future."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Bristol",
      logo: require("./assets/images/uob_new_logo.png"),
      subHeader: "BDS Dentistry",
      duration: "Current",
      desc: "Currently studying BDS Dentistry at the University of Bristol.",
      descBullets: []
    },
    {
      schoolName: "University of Bristol",
      logo: require("./assets/images/uob_new_logo.png"),
      subHeader: "BSc Dentistry",
      duration: "Current",
      desc: "Currently studying BSc Dentistry at the University of Bristol.",
      descBullets: []
    },
    {
      schoolName: "International Baccalaureate",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "IB Diploma - 45 points",
      duration: "Completed",
      desc: "Achieved 45 points in the International Baccalaureate, equivalent to 5 A* at A level.",
      descBullets: [
        "Higher Level: Biology, Chemistry, Psychology",
        "Standard Level: English, Mathematics, French"
      ]
    },
    {
      schoolName: "GCSE",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "GCSE Qualifications",
      duration: "Completed",
      desc: "Outstanding GCSE results demonstrating academic excellence.",
      descBullets: [
        "6 x Grade 9's (A**)",
        "4 x Grade 8's (A*)",
        "A* in Further Mathematics"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Dental Student",
      company: "St George's Hospital, London",
      companylogo: require("./assets/images/harvardLogo.png"),
      date: "Current",
      desc: "Working in the Maxillofacial and Orthodontic department, gaining hands-on experience in specialized dental care and treatment.",
      descBullets: [
        "Assisting with maxillofacial procedures",
        "Learning orthodontic treatment techniques",
        "Observing complex dental surgeries",
        "Working with specialized dental equipment"
      ]
    },
    {
      role: "Dental Assistant",
      company: "The Sandford Dental Clinic",
      companylogo: require("./assets/images/stanfordLogo.png"),
      date: "Current",
      desc: "Providing support in a private dental practice, gaining practical experience in patient care and dental procedures.",
      descBullets: [
        "Assisting dentists with patient procedures",
        "Managing patient records and appointments",
        "Sterilizing dental instruments",
        "Providing patient care and support"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Volunteering and Fundraising Section

const bigProjects = {
  title: "Volunteering & Fundraising",
  subtitle: "MAKING A DIFFERENCE THROUGH SERVICE AND CHARITY",
  projects: [
    {
      image: require("./assets/images/harvardLogo.png"),
      projectName: "Peru - School Volunteering",
      projectDesc: "One week in a school, using basic Spanish to educate the children on oral hygiene, and fundraising money to provide them all with toothbrushes and toothpaste.",
      footerLink: []
    },
    {
      image: require("./assets/images/stanfordLogo.png"),
      projectName: "Tanzania - One Month Placement",
      projectDesc: "One month volunteering placement, completing oral health promotion in a daycare centre, and fundraising over £500 to install soft flooring in the playground, repainting the building and a mural with the children's handprints, and providing each child with a named pencil case with school supplies as well as a toothbrush and small toothpaste. I also attended medical outreach, ensuring I remained within my scope of practice and current training, but providing oral health advice to those in the most rural populations.",
      footerLink: []
    },
    {
      image: require("./assets/images/im_logo.jpg"),
      projectName: "Ironman 70.3 - Charity Fundraising",
      projectDesc: "I raised over £1000 for Prostate Cancer UK and Crohns and Colitis UK - charities whose research and support has been key in my parents' health.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Personal Brand Section

const achievementSection = {
  title: "PERSONAL BRAND",
  subtitle:
    "I have always been active, growing up swimming, playing tennis, hockey, and trying everything from taekwondo to horse riding. Whilst travelling I found my love for running as a method of exploring new cities, and cycling (bike packing) as a great way to see countries at a slower pace (and much cheaper!) rate. I have documented my whole journey from weight gain following an eating disorder, to where I am today! Some of the crazy cool challenges I've documented are:",

  achievementsCards: [
    {
      title: "• Over 15 half marathons",
      subtitle: "",
      image: null,
      imageAlt: "",
      footerLink: []
    },
    {
      title: "• 2 x 70.3 Ironman triathlons",
      subtitle: "",
      image: null,
      imageAlt: "",
      footerLink: []
    },
    {
      title: "• Paris Marathon 2025",
      subtitle: "",
      image: null,
      imageAlt: "",
      footerLink: []
    },
    {
      title: "• 375km bikepacking trip in Slovenia",
      subtitle: "",
      image: null,
      imageAlt: "",
      footerLink: []
    },
    {
      title: "• 550km bike packing trip in France",
      subtitle: "",
      image: null,
      imageAlt: "",
      footerLink: []
    },
    {
      title: "• 5 day Salkantay trek in Peru",
      subtitle: "",
      image: null,
      imageAlt: "",
      footerLink: []
    },
    {
      title: "• 3 day Mount Rinjani trek in Lombok, Indonesia",
      subtitle: "",
      image: null,
      imageAlt: "",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "happyhealthyhols@gmail.com",
  number: "+1-555-0123",
  email_address: "happyhealthyhols@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
