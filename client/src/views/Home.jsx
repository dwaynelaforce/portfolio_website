import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useState, useEffect } from 'react'

// components
import LoadingBarBox from '../components/LoadingBarBox.jsx'
import Delay from '../components/Delay.jsx'
import Headline from '../components/Headline.jsx'
import Welcome from '../components/Welcome.jsx'
import Interface from '../components/Interface.jsx'

export default function Home() {
    return (
        <Container className="m-0">
            <Delay startDelay={1000}>
                <LoadingBarBox startDelay={1000} 
                    loadingInterval={20} linger={1000}>
                    <Delay startDelay={1000}>
                        <Headline/>
                        <Delay startDelay={1000}>
                            <Welcome/>
                            <Interface/>
                        </Delay>
                    </Delay>
                </LoadingBarBox>
            </Delay>
        </Container>
    );
    
}