import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import MainPage from './containers/MainPage';
import UserFavoriteColor from './containers/UserPage';
import UserPage from './containers/UserFavoriteColor';

import PrivateRoute from './components/PrivateRoute';

import { signIn } from './store/actions/actionCreators';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const [isInitialized, setInitialized] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (!id) {
      return setInitialized(true);
    }

    dispatch(
      signIn()
    )
      .then((v) => {
        setInitialized(true);
      })
      .catch(e => console.log(e));
  }, [dispatch]);

  if (!isInitialized) {
    return <div>Loading...</div>
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <PrivateRoute
            path={'/example-start'}
          >
            <MainPage />
          </PrivateRoute>
          <PrivateRoute
            path={'/example-page2/:user_id'}
          >
            <UserFavoriteColor />
          </PrivateRoute>
          <PrivateRoute
            path={'/example-page3/:user_id'}
          >
            <UserPage />
          </PrivateRoute>
          <Route path={'*'}>
            <Redirect to={'/example-start'} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
