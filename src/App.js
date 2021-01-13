import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home/Home'
import '@fortawesome/fontawesome-free/js/all'
import 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap.min'
import '@fortawesome/fontawesome-free/css/all.css'
import Buy from './components/Buy/Buy'
import Sell from './components/Sell/Sell'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Rent from './components/ForRent/Rent'
import CreateListing from './components/Sell/Createlisting/CreateListing'
import Profile from './components/profile/Profile'
import SellAgent from './components/Sell/Agent/SellAgent'
import AgentDetail from './components/Sell/Agent/AgentDetail'
import Contact from './components/contact/Contact'
import Detail from './components/Detail/Detail'
import Container_login from './components/user/Container_login'
import Container_signin from './components/user/Container_signin'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/contact' component={Contact}/>
  <Route  path='/Sell' component={Sell}/>
<Route path='/Buy' component={Buy}/>
<Route path='/createlist' component={CreateListing}/>
<Route path='/Rent' component={Rent}/>
<Route path='/login' component={Container_login}/>
<Route path='/signin' component={Container_signin}/>
<Route path='/detail' component={Detail}/>
<Route path='/agent/:agentname' component={AgentDetail}/>
<Route path='/agent' component={SellAgent}/>
<Route path='/profile' component={Profile}/>
  </Switch>
      </BrowserRouter>
    )
  }
}
export default App;