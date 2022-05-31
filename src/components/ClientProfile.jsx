import React from "react";
import {Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Subscriptions from "./ClientProfile/Subscriptions";
import { NotFound } from './../components/NotFound';
let ClientInfo = {
    Name:"John Doe"
}
export default (props)=>{
    return(
        // Container
        <div className="container-fluid vh-100">
            {/* Main Row */}
            <div className="no-gutters row d-flex align-items-center">
                {/* Profile Section */}
                <div className="col-2 col-xs-3 ProfileColumn vh-100 d-flex flex-column align-items-center shadow-sm">
                    {/* Profile Image */}
                    <div>
                        <img className="rounded-circle ClientProfileImage my-3 shadow"/>
                    </div>
                        {/* Profile Link */}
                        <div className="ProfileFont">{ClientInfo.Name}</div>
                        {/* Different Links */}
                        <div className="no-gutters row align-self-end LinkFont d-flex flex-column">
                            <ul className="my-5 NoBullets col-12">
                                <li className="MarginLink d-flex align-items-center"><FontAwesomeIcon icon={faMoneyCheckDollar} className="mx-2"/><Link className="NoUnderLine" to="Subscriptions"><div className="ClientProfileLink"> Subscriptions</div></Link></li>
                                <li className="MarginLink d-flex align-items-center"><FontAwesomeIcon icon={faDumbbell} className="mx-2"/><Link className="NoUnderLine" to="/"><div className="ClientProfileLink"> Workouts</div></Link></li>
                                <li className="MarginLink d-flex align-items-center"><FontAwesomeIcon icon={faUtensils} className="mx-2"/><Link className="NoUnderLine" to="/"><div className="ClientProfileLink"> Nutrition</div></Link></li>
                            </ul>
                        </div>
                </div>
                <Routes>
                   <Route path="Subscriptions" element={<Subscriptions/>}></Route>
                </Routes>
            </div>
        </div>
    );
}