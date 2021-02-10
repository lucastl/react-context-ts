import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import FirstView from '../components/FirstView';

import ProductState from '../context/Product/ProductState';
import ProductDetail from '../components/ProductDetail';

function App() {
  return (
    <ProductState>
      <Router>
        <Switch>
          <Route
            path="/product/:id"
          >
            <ProductDetail />
          </Route>
          <Route
            path="/"
            children={<FirstView />}
          />
        </Switch>
      </Router>
    </ProductState>
  );
}

export default App;
