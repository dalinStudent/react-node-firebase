import './App.css';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/layout';
import { Switch, Route  } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
          <Route exact path='/'><AllMeetupsPage /></Route>
          <Route path='/new-meetup'><NewMeetupPage /></Route>
          <Route path='/favorites'><FavoritesPage /></Route>
      </Switch>
    </Layout>
  );
}

export default App;
