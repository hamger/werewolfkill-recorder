import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Allocation from './routes/Allocation/Allocation';
import Record from './routes/Record/Record';
import About from './routes/About/About';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} desc="首页"/>
        <Route path="/allocation" component={Allocation} desc="配置页"/>
        <Route path="/record" component={Record} desc="记录页"/>
        <Route path="/about" component={About} desc="关于"/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
