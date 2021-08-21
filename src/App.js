import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import PageLoading from './components/PageLoading';

const loadbleOptions = { fallback: <PageLoading /> };
const Home = loadable(() => import('./pages'), loadbleOptions);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
