import React from 'react'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export const Sidebar = () => {
    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
                // selected is the text of the selected item
            }}
            className="sideNav"
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="profile">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i class="fa-solid fa-home" style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        home
                    </NavText>
                </NavItem>
                <NavItem eventKey="profile">
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
                <NavItem eventKey="WorkOuts">
                    <NavIcon>
                        <i class="fa-solid fa-dumbbell" style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        WorkOuts
                    </NavText>
                </NavItem>
                <NavItem eventKey="nutrition">
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
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}
