import React from "react";
import {Switch, Route} from 'react-router-dom'
import {Dashboard, Chart, MoviesViews} from './views'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/chart" component={Chart} />
      <Route exact path="/movies" component={MoviesViews} />
    </Switch>

  );
}

export default App;
