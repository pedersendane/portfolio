import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage.js'
import ProjectPage from './Pages/ProjectPage/ProjectPage.js'
import { updateDarkMode } from './Components/Toggle/DarkToggle.js'
import * as Constants from './Constants';

export default function App() {
  hideWarnings();
  return (
    <Switch>
      <Route exact path={Constants.HomeUrl} component={HomePage} />
      <Route exact path={Constants.ProjectsUrl} component={ProjectPage} />
    </Switch>
  )
}

function hideWarnings() {
  //console.warn = console.error = () => {};
  console.warn = () => { };

}