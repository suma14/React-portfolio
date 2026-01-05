// import reactImg from './assets/react-core-concepts.png'; // Importing image useful in deployment 
// import componentsImg from './assets/components.png'; // Importing image useful in deployment
import {use, useState, Fragment} from 'react';
import { SKILLS} from './data.js'; // Importing data from data.js
import Header from './components/Header/Header.jsx';

import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Academics from './components/Academics/Academics.jsx';
import Experiences from './components/Experiences/Experiences.jsx';
import Contacts from './components/Contact/Contacts.jsx';
import TabButton from './components/TabButton.jsx'; 
import Tabs from './components/Tabs.jsx';
import Section from './components/Section.jsx';


// function CoreConceptsList(props) {
//   return (
//     <li>
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h3>{props.university}</h3>
//       <h2>{props.period}</h2>
//       <h2>{props.place}</h2>
//       <p>{props.description}</p>
//     </li>
//   );
// }

function App() {
  const [selectedSection, setSelectedSection] = useState('Home'); // State to manage selected button and default message
    function handleSelect(selectedButton) {
    //selectedButton=>'Home','About','Experience','Projects','Skills','Contact'
    setSelectedSection(selectedButton);
    console.log(`${selectedButton} button selected`);
    }
  
  return (
    <>
      <Section id="examples">
      {/* <h2>Examples</h2> */}
      <Tabs 
      // ButtonsContainer="menu"
      buttons={
        <>
          <TabButton isSelected={selectedSection==='Home'} onClick={() => handleSelect('Home')}>Home</TabButton>
          <TabButton isSelected={selectedSection==='About'} onClick={() => handleSelect('About')}>About</TabButton>
          <TabButton isSelected={selectedSection==='Experience'} onClick={() => handleSelect('Experience')}>Experience</TabButton>
          <TabButton isSelected={selectedSection==='Projects'} onClick={() => handleSelect('Projects')}>Projects</TabButton>
          <TabButton isSelected={selectedSection==='Skills'} onClick={() => handleSelect('Skills')}>Skills</TabButton>
          <TabButton isSelected={selectedSection==='Contact'} onClick={() => handleSelect('Contact')}>Contact</TabButton>
        </>
      }> 
      <main>
        {selectedSection === 'Home' && <Header />}

        {selectedSection === 'About' && <Academics />}

        {selectedSection === 'Experience' && <Experiences />}

        {selectedSection === 'Projects' && <Projects />}

        {selectedSection === 'Skills' && <Skills skillsData={SKILLS} />}

        {selectedSection === 'Contact' && <Contacts />}

      </main>
      </Tabs>
      
              
                      {/* <div id="tab-content">
                          <h3>{EXAMPLES[selectedSection].title}</h3>
                          <p>{EXAMPLES[selectedSection].description}</p>
                          <pre>
                          <code>
                              {EXAMPLES[selectedSection].code}
                          </code> 
                          </pre>
              
                      </div> */}
      </Section>
      
      {/* {selectedSection === 'Home' && <Header />} */}
      


      {/* <Header /> {/* Header component called here */}
      {/* <main>
        <section id="core-concepts">
          <h2>About Me</h2>
          <ul>
            <CoreConcept
              img ={CORE_CONCEPTS[0].img}  
              title={CORE_CONCEPTS[0].title}
              university={CORE_CONCEPTS[0].university}
              period={CORE_CONCEPTS[0].period}
              place={CORE_CONCEPTS[0].place}
              description={CORE_CONCEPTS[0].description}
            />
            < CoreConcept { ...CORE_CONCEPTS[1]} />  
          </ul>
        </section>
      </main> */} 
    </>
  );
}

export default App;
