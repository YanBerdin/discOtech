import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.scss';

import store from './store/index';
import App from './components/App/App';

/**
 * The root React element of the application.
 *
 * @type {ReactElement}
 */
const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
