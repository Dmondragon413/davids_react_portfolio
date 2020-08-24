import React, { Component } from 'react'; // imported from node modules so just added in the 'nodeModule'.
import moment from 'moment';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// you want to seperate your imports
// anything that's imported from a library, or from React, keep those at the top,
// anything else that's imported from your own application, then keep those separated, and keep them together.

// here we're calling to use REACT ROUTER from react-router-dom
import PortfolioContainer from "./portfolio/portfolio-container"; // when importing something WE created from our OWN file, we need to add the actual path of file.
import NavigationContainer from "./navigation/navigationContainer"; 
import DateTime from './date';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import BlogDetail from './pages/blog-detail';
import PortfolioDetail from './portfolio/portfolio-detail';
import PortfolioManager from './pages/portfolio-manager';
import Auth from './pages/auth';
import NoMatch from './pages/nomatch';
import Icons from "../helpers/icons"



export default class App extends Component { // theres this component library and what we're saying is wrap up all the behavior in a component & I want to use that inside this class app.

  constructor(props) {
    super(props);

    Icons()

    this.state = {
      loggedInStatus :"NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this)
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this)
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }
  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios
    .get("https://api.devcamp.space/logged_in", {
      withCredentials: true
    })
    .then(response => {
      console.log("response from app.js ", response)
      const loggedIn = response.data.logged_in
      const loggedInStatus = this.state.loggedInStatus

      if (loggedIn && loggedInStatus === 'LOGGED_IN') {
        return loggedIn
      } else if (loggedIn && loggedInStatus === 'NOT_LOGGED_IN') {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        })
      } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        })
      }
    })
    .catch(error => {
      console.log('oh dang!', error)
    })
  }
  
  componentDidMount() {
    this.checkLoginStatus()
  }

  authorizedPages() {
    return [
      <Route key='portfolio-manager' path="/portfolio-manager" component={PortfolioManager}/>

    ]
  }
  
  render() { // if you are using a class component, you'll always need to have this << RENDER() method here. here we passed no arguments.
    return ( // inside RENDER we need a RETURN statement & this statement is what returns & shown on the page.
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer 
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout}
            />


            <Switch>
              <Route exact path="/" component = {Home}/> {/* the components are where we slide in the file, our 'code',  we want to render and use on the page*/}
              
              <Route 
                path="/auth" 
                render={props => (
                  <Auth 
                    {...props}
                    handleSuccessfulLogin = {this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin = {this.handleUnsuccessfulLogin}
                    />
                  )}
                />
              <Route path="/about-me" component = {About}/>
              <Route path="/contact" component={Contact}/>
              
              <Route path="/blog" 
              render={props => (
                <Blog 
                {...props}
                loggedInStatus={this.state.loggedInStatus}
                />
              )}
              />

              <Route
              path="/b/:slug"
              render={props => (
                <BlogDetail
                {...props}
                loggedInStatus={this.state.loggedInStatus}
                />
              )}
              />
              {this.state.loggedInStatus === 'LOGGED_IN' ? this.authorizedPages() : null}
              <Route exact path="/portfolio/:slug" component={PortfolioDetail}/>
              <Route component={NoMatch}/> {/* a ROUTE without a PATH will get picked up whenever a page is not found */}
            </Switch>

          </div>
        </Router>
               
      </div>
    );
  }
}
