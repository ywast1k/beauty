import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');
rootElement.style.height = '100vh';
rootElement.style.width = '100%';
rootElement.style.display = 'flex';
rootElement.style.flexDirection = 'column';
rootElement.style.justifyContent = 'center';
rootElement.style.alignItems = 'center';

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);