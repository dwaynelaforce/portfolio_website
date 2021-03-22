import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useState, useEffect } from 'react'

// components
import LoadingBarBox from '../components/LoadingBarBox.jsx'
import Headline from '../components/Headline.jsx'
import Interface from '../components/Interface.jsx'

export default function Home() {
    return (
        <Container className="m-0">
            <LoadingBarBox delay={800}/>
            <Headline delay={3000}/>
            <Interface delay={4000}/>
        </Container>
    );
    
}