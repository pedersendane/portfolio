import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import HomePage from './Pages/HomePage'
import ProjectPage from './Pages/ProjectPage'
import * as Constants from './Constants';

export default function App() {
  return (
    <Switch>
      <Route exact path={Constants.HomeUrl} component={HomePage} />
      <Route exact path={Constants.ProjectsUrl} component={ProjectPage} />
      {/* <Route exact path="/Github-Pages-Personal-Site/" component={HomePage} /> */}
      {/* <Route path="/:id" component={UserPage} /> */}
    </Switch>
  )
}
