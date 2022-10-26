import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './components/Routes/routes';
import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage/SplashPage';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCurrentUser } from './store/session';
import { Route } from 'react-router-dom';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={SplashPage} />
      </Switch>
    </>
  );
}

export default App;