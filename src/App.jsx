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
import { AboutUs } from './components/Aboutus';
import{ Contact }from './components/Contactus';

import { Signin } from './components/SignInComponents/Signin'
import { ClientSingnup } from './components/ClientSignUp'
import {ClientInfo} from './components/registeration/clientRegistration/clientInfo'
import { CoachSignUp } from './components/CoachSignUp';

import { NotFound } from './components/shared/NotFound';
import { NotAuthorized } from './components/shared/NotAuthorized';
import { ClientProfile } from './components/ClientProfile';
import { CoachProfile } from './components/CoachProfile';

import { Carousell } from './components/landingPageComponents/Carousell';
import { ListOfCoaches } from './components/ListOfCoaches';
import { DialogEditWorkout } from './components/coachProfile/DialogEditWorkout';
import ProtectedRoute from './ProtectedRouter';


function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<LandingPage/>}/>

            

            <Route path="Signin" element={<Signin/>} />
            <Route path="clientinfo" element={<ClientInfo/>} />
            <Route path="signup" element={<ClientSingnup/>} />
            <Route path="coachsignup" element={<CoachSignUp/>} />
            <Route path="ClientProfile" element={<ClientProfile/>} />
            <Route path="CoachProfile" element={<CoachProfile/>} />
            <Route path="DialogEditWorkout" element={<DialogEditWorkout/>} />
            {/* <Route element={<ProtectedRoute/>}>
            </Route> */}

            <Route path="aboutus" element={<AboutUs/>} />
            <Route path="contactus" element={<Contact/>} />
            
            <Route path="carousel" element={<Carousell/>}/>
            {/* <Route path="login" element={<Login/>} /> */}
            <Route path="list" element={<ListOfCoaches/>} />
            <Route path="NotAuthorized" element={<NotAuthorized/>} />
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

