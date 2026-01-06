import MSTImg from './assets/MST-Logo.jpg';
import GcetImg from './assets/GCET-Logo.jpeg';
import teachnookImg from './assets/immensphere_logo.jpeg';
import cognizantImg from './assets/cognizant-logo.png';
import protfolioImg from './assets/proj-portfolio.png';
import ekartImg from './assets/ekart.png';
import citiImg from './assets/citibike-dashboard.png';
import covidImg from './assets/COVID-19.png';
import bigmartImg from './assets/Bigmart.png';
import suicideImg from './assets/Suicide.png';

export const ACADEMICS = [
  {
    img :MSTImg,
    title:"Master of Science in Information Science and Technology",
    university:"Missouri University of Science and Technology",
    period:"August 2023 - May 2025",
    place:"Rolla, MO, USA",
    description:"Focusing on advanced data analysis, SAP, machine learning, and full-stack development with hands-on experience in modern technologies and frameworks."
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
    role:"Research Assistant",
    company:"Missouri University of Science and Technology",
    period:"August 2023 – Present",
    location:"Rolla, MO, USA",
    description:"Conducting AR research using Unity and Vuforia o study user perception and interaction across digital environments and AR glasses."
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
    description:"Worked with Oracle HCM Fusion and SQL. Developed BI Publisher reports and conducted system analysis to ensure application functionality and data integrity."  
  }
]

export const PROJECTS=[
  {
    img :protfolioImg,
    title:" Personal Portfolio Website",
    githubLink:"https://github.com/suma14/React-portfolio",
    university:"Self-Initiated Project",
    period:"March 2024 – April 2024",
    place:"Rolla, MO, USA",
    description:"Developed a personal portfolio website using React to showcase my projects, skills, and experience. Implemented responsive design principles to ensure optimal viewing across devices.",
    technologies:["React","JavaScript","HTML","CSS","VS Code"]
  },
  {
    img :ekartImg,
    title:"Ekart Shopping Platform using NodeJS",
    githubLink:"https://github.com/suma14/Node-app",
    university:"Self-Initiated Project",        
    period:"Dec 2022 – Jan 2023",
    place:"Hyderabad, India",
    description:"Built a full-stack e-commerce web application using NodeJS, Express, and EJS templating. Implemented user authentication, product management, and shopping cart functionalities.",
    technologies:["ExpressJS","Java","HTML","CSS","NodeJS","EJS","JavaScript","SQL","MongoDB","REST APIs","VS Code"]
  },
  {
    img :citiImg,
    title:" Citi Bikes Data Analysis in NYC (SAP)",
    githubLink:"https://github.com/suma14/Citi-Bikes-Data-Analysis-in-NYC-using-SAP",
    university:"Self-Initiated Project",        
    period:"Sep 2022 – Oct 2022",
    place:"Hyderabad, India",
    description:"Used SAP analytics tools to analyze bike-sharing data. Identified rider behavior, usage patterns, and station demand. Built dashboards with KPIs like trip duration, station popularity, rider demographics.",
    technologies:["SAP HANA","SAP Analytics"]
  },
  {
    img :bigmartImg,
    title:" Big Mart Sales Prediction",
    githubLink:"https://github.com/suma14/Big-mart-sales-prediction",
    university:"Self-Initiated Project",    
    period:"Jul 2022 – Aug 2022",
    place:"Hyderabad, India",
    description:"Forecasted sales across outlets using 8,523-record dataset. Applied data preprocessing, feature engineering, EDA, and one-hot encoding. Tested models: Linear Regression, Ridge, Random Forest; achieved 71% accuracy.",
    technologies:["Python","Pandas","Scikit-learn","Matplotlib","Seaborn","XGBoost"]
  },
  {
    img :suicideImg,
    title:"Suicide Rate Trend Analysis",
    githubLink:"https://github.com/suma14/Suicide-rate-trend-analysis",
    university:"Self-Initiated Project",    
    period:"Aug 2023 – Oct 2023",
    place:"Hyderabad, India",
    description:"Conducted exploratory data analysis (EDA) on global suicide statistics using Python (Pandas, NumPy, Matplotlib, Seaborn) to identify patterns by country, gender, age group, and generation between multiple years.",
    technologies:["Python","Pandas","NumPy","Matplotlib","Seaborn"]
  },
  {
    img :covidImg,
    title:"COVID-19 Tweet Sentiment Analysis",
    githubLink:"https://github.com/suma14/COVID-19-Tweet-Sentiment-Analysis",
    university:"Self-Initiated Project",    
    period:"Mar 2022 – May 2022",
    place:"Hyderabad, India",
    description:"Performed end-to-end sentiment analysis on COVID-19–related tweets to extract public opinion insights. Cleaned and preprocessed unstructured text data using regex, stop word removal, stemming, and tokenization. Applied one-hot encoding and sequence padding to prepare data for analysis.Built and evaluated an LSTM neural network in Keras/TensorFlow to classify sentiment categories.",
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
