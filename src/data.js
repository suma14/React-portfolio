import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';  
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';
import MSTImg from './assets/MST-Logo.jpg';
import GcetImg from './assets/GCET-Logo.jpeg';
import teachnookImg from './assets/immensphere_logo.jpeg';
import cognizantImg from './assets/cognizant-logo.png';
import protfolioImg from './assets/proj-portfolio.png';

export const ACADEMICS = [
  {
    img :MSTImg,
    title:"Master of Science in Information Science and Technology",
    university:"Missouri University of Science and Technology",
    period:"August 2023 - May 2025",
    place:"Rolla, MO, USA",
    description:"Focusing on advanced data analysis, machine learning, and full-stack development with hands-on experience in modern technologies and frameworks."
  },
  {
    img :GcetImg,
    title:"Bachelor of Technology in Electronics and Communication Engineering",
    university:"Geethanjali College of Engineering and Technology",
    period:"May 2018 - May 2022",
    place:"Hyderabad, India",
    description:"Strong foundation in engineering principles, digital systems, and communication technologies that complement my current focus on data science and software development."
  } 
];

export const EXPERIENCE=[
  {
    img :MSTImg,
    role:"Graduate Teaching Assistant",
    company:"Missouri University of Science and Technology",
    period:"August 2023 – Present",
    location:"Rolla, MO, USA",
    description:"Assisting in teaching undergraduate courses related to data science and programming. Responsibilities include conducting lab sessions, grading assignments, and providing support to students."
  },
  {
    img :teachnookImg,
    role:"Web Developer",
    company:"Teachnook",
    period:"Nov 2022 – Jun 2023",
    location:"Hyderabad, India",
    description:"Collaborated on a web development project, focusing on both front-end and back-end development. Gained experience with HTML, CSS, JavaScript, and responsive web design."
  },
  {
    img :cognizantImg,
    role:"Program Analyst",
    company:"Cognizant Technology Services (CTS)",
    period:"Jan 2022 – Oct 2022",
    location:"Hyderabad, India",
    description:"Worked with Oracle HCM Fusion and SQL for full stack development. Developed BI Publisher reports and conducted system analysis to ensure application functionality and data integrity."  
  }
]

export const PROJECTS=[
  {
    img :protfolioImg,
    title:" Personal Portfolio Website",
    university:"Self-Initiated Project",
    period:"March 2024 – April 2024",
    place:"Rolla, MO, USA",
    description:"Developed a personal portfolio website using React to showcase my projects, skills, and experience. Implemented responsive design principles to ensure optimal viewing across devices.",
    technologies:["React","JavaScript","HTML","CSS","VS Code"]
  },
  {
    img :jsxImg,
    title:"Ekart Shopping Platform using NodeJS",
    university:"Self-Initiated Project",        
    period:"Dec 2022 – Jan 2023",
    place:"Hyderabad, India",
    description:"Built a full-stack e-commerce web application using NodeJS, Express, and EJS templating. Implemented user authentication, product management, and shopping cart functionalities.",
    technologies:["ExpressJS","Java","HTML","CSS","NodeJS","EJS","JavaScript","SQL","MongoDB","REST APIs","VS Code"]
  },
  {
    img :componentsImg,
    title:" Citi Bikes Data Analysis in NYC (SAP)",
    university:"Self-Initiated Project",        
    period:"Sep 2022 – Oct 2022",
    place:"Hyderabad, India",
    description:"Used SAP analytics tools to analyze bike-sharing data. Identified rider behavior, usage patterns, and station demand. Built dashboards with KPIs like trip duration, station popularity, rider demographics.",
    technologies:["SAP HANA","SAP Analytics"]
  },
  {
    img :stateImg,
    title:" Big Mart Sales Prediction",
    university:"Self-Initiated Project",    
    period:"Jul 2022 – Aug 2022",
    place:"Hyderabad, India",
    description:"Forecasted sales across outlets using 8,523-record dataset. Applied data preprocessing, feature engineering, EDA, and one-hot encoding. Tested models: Linear Regression, Ridge, Random Forest; achieved 71% accuracy.",
    technologies:["Python","Pandas","Scikit-learn","Matplotlib","Seaborn","XGBoost"]
  },
  {
    img :stateImg,
    title:"Suicide Rate Trend Analysis",
    university:"Self-Initiated Project",    
    period:"Aug 2023 – Oct 2023",
    place:"Hyderabad, India",
    description:"Conducted exploratory data analysis (EDA) on global suicide statistics using Python (Pandas, NumPy, Matplotlib, Seaborn) to identify patterns by country, gender, age group, and generation between multiple years.",
    technologies:["Python","Pandas","NumPy","Matplotlib","Seaborn"]
  },
  {
    img :stateImg,
    title:"COVID-19 Tweet Sentiment Analysis",
    university:"Self-Initiated Project",    
    period:"Mar 2022 – May 2022",
    place:"Hyderabad, India",
    description:"Performed end-to-end sentiment analysis on COVID-19–related tweets to extract public opinion insights. Cleaned and preprocessed unstructured text data using regex, stop word removal, stemming, and tokenization. Applied one-hot encoding and sequence padding to prepare data for analysis.",
    technologies: ["Python","Pandas","NLTK","Seaborn","Matplotlib","Scikit-learn","Keras","TensorFlow"]
  }
];

export const SKILLS=[
  {
    category:"Programming Languages",
    skills:[
      {name:"C"},
      {name:"Python"},
      {name:"Java"},
      {name:"R"},
      {name:"Verilog"},
      {name:"Matlab"}
    ]
  },
  {
    category:"Web Development",
    skills:[
      {name:"HTML"},
      {name:"CSS"},
      {name:"Bootstrap"},
      {name:"JavaScript"},
      {name:"PHP"},
      {name:"React JS"},
      {name:"Node JS"},
      {name:"Express JS"},
      {name:"SAP HANA Studio"},
      {name:"Fiori"},
      {name:"SAP Analytics Cloud (SAC)"},
      {name:"SAP S4 HANA"},
      {name:"HANA Cloud Platform"},
      {name:"SAP Designer Studio"},
      {name:"SAS Visual Analytics"},
      {name:"Power BI"},
      {name:"Tableau"}
    ]
  },
  {
    category:"Machine Learning & Data Science",
    skills:[
      {name:"Data Analysis"},
      {name:"Machine Learning"},
      {name:"Pandas"},
      {name:"NumPy"},
      {name:"Scikit-learn"},
      {name:"Matplotlib"},
      {name:"Seaborn"},
      {name:"XGBoost"}
    ] 
  },
  {
    category:"Frameworks",
    skills:[
      {name:"React"},
      {name:"Django"},
    ]
  },
  {
    category:"ERP Tools and BI",
    skills:[
      {name:"SAP HANA Studio"},
      {name:"Fiori"},
      {name:"SAP Analytics Cloud (SAC)"},
      {name:"SAP S4 HANA"},
      {name:"HANA Cloud Platform"},
      {name:"SAP Designer Studio"},
      {name:"SAS Visual Analytics"},
      {name:"Power BI"},
      {name:"Tableau"}      
    ] 
  },
    {
    category:"Database Tools",
    skills:[
      {name:"DBMS"},
      {name:"SQL"},
      {name:"MongoDB"},
      {name:"Excel"}
    ]
  },
  {
    category:"Design & Dev Tools",
    skills:[
      {name:"VS Code"},
      {name:"Figma"},
      {name:"GitHub"}
    ]
  }
];
export const CONTACT_INFO = [
  {
    method: "Email",
    detail: "sumagurugubelli@gmail.com",
  },
  {
    method: "Phone", 
    detail: "+1 (573) 647-0836",
  },
  {
    method: "LinkedIn",
    detail: "linkedin.com/in/suma-gurugubelli",
  }
]






export const EXAMPLES = {
  Home: {
    title: 'Home',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  About: {
    title: 'About',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  Experience: {
    title: 'Experience',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  Projects: {
    title: 'Projects',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
