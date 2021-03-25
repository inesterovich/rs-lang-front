import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TextBookMain from './pages/TextBookMain';
import RegisterPage from './pages/Register';
import { LoginPage } from './pages/Login/LoginPage';
import MyWordsPage from './pages/MyWordsPage';
import TextBookPage from './pages/TextBookPage';
import Sprint from './pages/games/Sprint';

import AudioChallenge from './pages/games/AudioChallenge/AudioChallenge';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    // TextBook - просто список модулей. Менюшка для перемещения по учебнику

    return (
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/textbook' exact>
          <TextBookMain />
        </Route>
        <Route path='/textbook/:module/:page?'>
          <TextBookPage />
        </Route>
        <Route path='/my-words'>
          <MyWordsPage />
        </Route>
        <Route path='/sprint'>
          <Sprint />
        </Route>
        <Route path='/audio-challenge'>
          <AudioChallenge />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Route path='/register' exact>
        <RegisterPage />
      </Route>
      <Route path='/login' exact>
        <LoginPage />
      </Route>
      <Route path='/sprint'>
        <Sprint />
      </Route>
      <Route path='/audio-challenge'>
        <AudioChallenge />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
};
