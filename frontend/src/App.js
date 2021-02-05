import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import MainPage from './pages/MainPage'
import TeamPage from './pages/TeamPage'
import WritingPage from './pages/WritingPage'
import Header from './layouts/Header'

const App = () => {

  return (
    <BrowserRouter>
      <Route path='/' component={Header}/>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/login' component={LogIn}/>
      <Route exact path='/teampage:pageId' component={TeamPage}/>
      <Route exact path='/writingpage' component={WritingPage}/>
      <Route path='/mainPage' component={MainPage}/>
    </BrowserRouter>
  )
}

export default App
