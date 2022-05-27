import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import components
import LandingPage from './components/LandingPage.jsx';
import { Login } from './components/Login';
import { NotFound } from './components/NotFound';


function App() {
    return (
        <Router>
            <Routes>
            <Route path="" element={<LandingPage/>} />
            <Route path="login" element={<Login/>} />
            <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    );
}

export default App;





// more routing
{/* <Header logoutRef={this.logout} /> */}
        {/* <Route component={(props)=> <Header setLoggedInRef={this.setLoggedIn} logoutRef={this.logout}  {...props}/>} path='/' /> */}
        
        
        {/* <Route component={(props)=> <NoAccess {...props}/>} path='/noaccess'/> */}
        {/* <Footer/> */}
        {/* <Route component={(props)=> <Footer/>} path='/' /> */}