import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import VibePage from './components/VibePage';
import NavBarPage from './NavBarPage';



class Routes extends Component{
    render(){
        return(
                <Router>
                    <NavBarPage />
                    <div>
                    <hr />
                    <Route name="Home" exact path="/" component={HomePage} />
                    <Route name="Menu" exact path="/menu" component={MenuPage} />
                    <Route name="About" exact path="/about" component={AboutPage} />
                    <Route name="Vibe" exact path="/vibe" component={VibePage} />
                
               </div>
               </Router>
        )
    }
}

export default Routes;