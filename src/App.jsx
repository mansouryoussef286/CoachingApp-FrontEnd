import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "@fortawesome/fontawesome-free";
import 'primeicons/primeicons.css';
// import components
import LandingPage from './components/LandingPage.jsx';
import { AboutUs } from './components/AboutUs';
import {ClientSingnup} from './components/ClientSignUp'
import { CoachSignUp } from './components/CoachSignUp';
import {Signin} from './components/SignInComponents/Signin'

import { NotFound } from './components/shared/NotFound';
import { NotAuthorized } from './components/shared/NotAuthorized';

import {ClientInfo} from './components/registeration/clientRegistration/clientInfo'



function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="Signin" element={<Signin/>} />
            <Route path="signup" element={<ClientSingnup/>} />
            <Route path="clientinfo" element={<ClientInfo/>} />
            <Route path="/NotAuthorized" element={<NotAuthorized/>} />
            <Route path="aboutus" element={<AboutUs/>} />
            <Route path="/coachsignup" element={<CoachSignUp/>} />
            <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    );
}

export default App;




    // more routing
    // {/* <Header logoutRef={this.logout} /> */}
    //         {/* <Route component={(props)=> <Header setLoggedInRef={this.setLoggedIn} logoutRef={this.logout}  {...props}/>} path='/' /> */}
            
            
    //         {/* <Route component={(props)=> <NoAccess {...props}/>} path='/noaccess'/> */}
    //         {/* <Footer/> */}
            // {/* <Route component={(props)=> <Footer/>} path='/' /> */}

