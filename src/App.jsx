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
import { Login } from './components/Login';
import { NotFound } from './components/NotFound';
import { Carousell } from './components/landingPageComponents/Carousell';
import { NotAuthorized } from './components/NotAuthorized';
import { ListOfCoaches } from './components/ListOfCoaches';
import { Header } from './components/shared/Header';
import { Footer } from './components/shared/Footer';
import ClientProfile from './components/ClientProfile';
function App() {
    return (
        <>
        <Router>
            <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="carousel" element={<Carousell/>}/>
            <Route path="login" element={<Login/>} />
            <Route path="list" element={<ListOfCoaches/>} />
            <Route path="NotAuthorized" element={<NotAuthorized/>} />
            <Route path="Client/*" element={<ClientProfile/>} />
            <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
        </>
    );
}

export default App;




    // more routing
    // {/* <Header logoutRef={this.logout} /> */}
    //         {/* <Route component={(props)=> <Header setLoggedInRef={this.setLoggedIn} logoutRef={this.logout}  {...props}/>} path='/' /> */}
            
            
    //         {/* <Route component={(props)=> <NoAccess {...props}/>} path='/noaccess'/> */}
    //         {/* <Footer/> */}
            // {/* <Route component={(props)=> <Footer/>} path='/' /> */}

