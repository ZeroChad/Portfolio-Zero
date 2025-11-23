import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Breaker from './Breaker/Breaker.jsx';
import ProjectSection from './components/My Projects/ProjectSection.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Breaker />
    <ProjectSection />
  </StrictMode>
);
