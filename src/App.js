import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SplashPage from './components/SplashPage';
import NotFound from './components/NotFound';
// something
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <SplashPage />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
