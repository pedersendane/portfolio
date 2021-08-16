import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage.js'
import ProjectPage from './Pages/ProjectPage/ProjectPage.js'
import SpotifyPage from './Pages/SpotifyPage/SpotifyPage.js'
import * as Constants from './Constants';
import FetchSpotifyUrl from './Components/api/Spotify/FetchSpotifyUrl.js'
import SpotifyLoginPage from './Pages/SpotifyPage/SpotifyLoginPage.js'



export default function App() {
  hideWarnings();
  return (
    <Switch>
      <Route exact path={Constants.HomeUrl} component={HomePage} />
      <Route exact path={Constants.ProjectsUrl} component={ProjectPage} />
      <Route path={Constants.SpotifyUrl} component={SpotifyPage} />
      <Route path={"/portfolio/spotify/login"} component={SpotifyLoginPage} />
    </Switch>
  )
}

function hideWarnings() {
  //console.warn = console.error = () => {};
  console.warn = console.log = console.error = () => { };

}