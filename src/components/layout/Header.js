import { Component } from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '../Home'
import AboutUs from '../About';
import Contact from '../Contact'
import Login from "../Login";
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from "./Dashboard";
import Logout from "../Logout";

class Header extends Component{
 

    render(){

        return(
            
         <Router> 
         
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
             
                        <div class="collapse navbar-collapse">
                            <ul class="navbar-nav mr-auto">
                                {/* <li class="nav-item active">
                                    <Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">About Us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/contact">About Us</Link>
                                </li> 

                                
                                
                                <li class="nav-item">
                                    <Link class="nav-link" to="/login">Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/user">User</Link>
                                </li>
                                */}
                                
                                <li class="nav-item">
                                    <Link class="nav-link" to="/login">Login</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" to="/logout">Logout</Link>
                                </li>

                            </ul>                   
                        </div>      
                    </nav>  
                                            
                    <Switch>
                        <Route exact path='/' component={Home}></Route> 
                        <Route exact path='/about' component={AboutUs}></Route>      
                        <Route exact path='/contact' component={Contact}></Route> 
                        <Route exact path='/login' component={Login}></Route>
                        <Route exact path='/dashboard' component={Dashboard}></Route>
                        <Route exact path='/logout' component={Logout}></Route>
                        
                    </Switch>
                </Router> 


        );
    }
}

export default Header;