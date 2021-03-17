import Container from 'react-bootstrap/Container'
import { useState } from 'react'

// components
import LoadingBarBox from '../components/LoadingBarBox.jsx'
import Headline from '../components/Headline.jsx'
import Interface from '../components/Interface.jsx'

export default function Home() {
    const [loaded, setLoaded] = useState(false);

    return (
        <Container>
            <LoadingBarBox/>
            <Headline/>
            <Interface/>
        </Container>
    );
    
}