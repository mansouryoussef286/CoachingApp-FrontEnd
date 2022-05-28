import React from 'react'

import { AboutGymawy } from './landingPageComponents/AboutGymawy'
import { Footer } from './shared/Footer.jsx'
import { Carousell } from './landingPageComponents/Carousell'
import { Coaches } from './landingPageComponents/Coaches'
import { Header } from './shared/Header.jsx'
import { FeedBack } from './landingPageComponents/FeedBack';
import { GetOurApp } from './landingPageComponents/GetOurApp.jsx'

const LandingPage = () => {

        return (

        <>
        <Header></Header>
        <Carousell></Carousell>
        <AboutGymawy></AboutGymawy>
        <FeedBack></FeedBack>
        <Coaches></Coaches>
        <Footer></Footer>

        </>
      );
}
export default LandingPage;