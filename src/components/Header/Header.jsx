import { useMemo } from 'react';
import './Header.module.css';
import profileImg from '../../assets/profile-photo.png';

const reactDescriptions = ['Enthusiast', 'Learner'];

export default function Header() {
  const description = useMemo(() => {
    return reactDescriptions[Math.floor(Math.random() * reactDescriptions.length)];
  }, []);

  return (
    <header>
      <img src={profileImg} alt="Portrait of Suma Gurugubelli" />

      <h1>Suma Gurugubelli</h1>

      <p>
        AI/ML • Data Science • Full Stack Development — {description}
      </p>

      <div className="summary">
        Aspiring Data Analyst and Full-Stack Developer with a Master’s in
        Information Science and Technology from Missouri S&T. Experienced in
        data analysis, machine learning, and full-stack development, focused on
        transforming complex data into impactful, user-centered solutions.
      </div>
    </header>
  );
}
