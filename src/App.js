
import './App.css';

import React, { Component } from 'react';

import WelcomeCover from '../src/components/WelcomeCover';
import InvitationInfo from '../src/components/InvitationInfo';
import Location from '../src/components/Location';
import Gallery from '../src/components/Gallery';
import Remittance from '../src/components/Remittance';

function App() {
    return (
        <div className="content">
            <WelcomeCover></WelcomeCover>
            <InvitationInfo></InvitationInfo>
            <Location></Location>
            {/* <Gallery></Gallery> */}
            {/* <Remittance></Remittance> */}
        </div>
    );
}

export default App;
