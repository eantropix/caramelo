import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Registration from '../pages/Registrations';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={Dashboard} />
		<Route path="/sign-in" exact component={SignIn} />
		<Route path="/sign-up" exact component={SignUp} />
		<Route path="/profile" exact component={Profile} />
		<Route path="/registration" exact component={Registration} />
	</Switch>
);

export default Routes;
