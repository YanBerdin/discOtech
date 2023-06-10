import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';

const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>

);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
