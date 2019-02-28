import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import './index.css';

import MarkdownPreviewer from './containers/markdown-previewer';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={MarkdownPreviewer} />
      <Switch>
        <Route path='/markdown-previewer' components={MarkdownPreviewer} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root'),
);
