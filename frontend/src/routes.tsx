import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home'));
const Avatar = lazy(() => import('./pages/Avatar'));

export const PATHS = {
  HOME: '/',
  AVATAR: '/avatar',
};

const routes = (): JSX.Element => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path={PATHS.HOME} component={Home} />
      <Route path={PATHS.AVATAR} component={Avatar} />
    </Switch>
  </Suspense>
);

export default routes;
