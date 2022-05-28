import React from 'react'

import { Header } from './shared/Header.jsx'
import { Footer } from './shared/Footer.jsx'
import { Carousell } from './landingPageComponents/Carousell'
import { AboutGymawy } from './landingPageComponents/AboutGymawy'
import { FeedBack } from './landingPageComponents/FeedBack';
import { Coaches } from './landingPageComponents/Coaches'
import { GetOurApp } from './landingPageComponents/GetOurApp.jsx'

const LandingPage = () => {

        return (
                <>
                <Header></Header>
                <Carousell></Carousell>
                <AboutGymawy></AboutGymawy>
                <FeedBack></FeedBack>
                <Coaches></Coaches>
                <GetOurApp></GetOurApp>
                <Footer></Footer>
                </>
        );
}
export default LandingPage;