import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import HomePage from './Pages/HomePage/HomePage.js'
import ProjectPage from './Pages/ProjectPage/ProjectPage.js'
import * as Constants from './Constants';

export default function App() {
  return (
    <Switch>
      <Route exact path={Constants.HomeUrl} component={HomePage} />
      <Route exact path={Constants.ProjectsUrl} component={ProjectPage} />
    </Switch>
  )
}
