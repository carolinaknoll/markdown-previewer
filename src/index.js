import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import './index.css';

import MarkdownPreviewer from './containers/markdown-previewer';

ReactDOM.render(
  <HashRouter>
    <Route exact path='/' component={MarkdownPreviewer} />
  </HashRouter>,
  document.getElementById('root'),
);
