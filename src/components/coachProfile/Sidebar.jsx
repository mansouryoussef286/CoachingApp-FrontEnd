import React from 'react'
import { useNavigate } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


export const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <SideNav
            onSelect={(selected) => {
                if (selected=="")
                {

                    const to = '/' + selected;
                    navigate(to);
                }
                else{
                    window.location.hash=`#${selected}`
                }
            }}
            className="sideNav"
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="profile">
                <NavItem eventKey="" onClick={()=>{navigate("/CoachProfile")}}>
                    <NavIcon>
                        <i class="fa-solid fa-home" style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText >
                        home
                    </NavText>
                </NavItem>
                <NavItem eventKey="CoachProfile">
                    <NavIcon>
                        <i class="fa-solid fa-user" style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        Profile
                    </NavText>
                </NavItem>
                <NavItem eventKey="Subscriptions">
                    <NavIcon>
                        <i class="fa-solid fa-check-double" style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        Subscriptions
                    </NavText>
                </NavItem>
                <NavItem eventKey="workouts">
                    <NavIcon>
                        <i class="fa-solid fa-dumbbell" style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        WorkOut
                    </NavText>
                    <NavItem eventKey="WorkOuts">
                        <NavText>
                            WorkOuts
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Exercies">
                        <NavText>
                            Exercies
                        </NavText>
                    </NavItem>
                </NavItem>
                <NavItem eventKey="Assign">
                    <NavIcon>
                    <i class="fa-solid fa-check-double" style={{ fontSize: '1.75em' }}></i>

                        
                    </NavIcon>
                    <NavText>
                        Assigment
                    </NavText>
                </NavItem>
                {/* <NavItem eventKey="nutrition">
                    <NavIcon>
                        <i class="fa-solid fa-bowl-food" style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        nutrition
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Charts
                    </NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            Line Chart
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Bar Chart
                        </NavText>
                    </NavItem>
                </NavItem> */}
            </SideNav.Nav>
        </SideNav>
    )
}
