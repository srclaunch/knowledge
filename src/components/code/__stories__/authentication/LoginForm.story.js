import { createMemoryHistory } from 'history';
import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import LoginForm from '../../authentication/LoginForm';

const history = createMemoryHistory();

export default {
  component: LoginForm,
  title: 'LoginForm',
};

const Template = args => (
  <Router history={history}>
    <LoginForm />
  </Router>
);

export const SimpleLoginForm = Template.bind({});
SimpleLoginForm.args = {};
