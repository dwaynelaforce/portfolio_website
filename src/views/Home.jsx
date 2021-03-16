import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

// components
import LoadingBar from '../components/LoadingBarBox.jsx'
import ContentBox from '../components/ContentBox.jsx'


export default function Home() {
    const [loaded, setLoaded] = useState(false);
    const [content, setContent] = useState(null);
    return(
        <Container className="m-4">
            {!loaded ? <LoadingBar setLoaded={setLoaded}/> : null}
            
            <h1>Dwayne LaForce</h1>
            <h5>Full Stack Developer</h5>
            <h6>Homelabber, tinkerer, Jack of all trades, man of many interests</h6>
            
            <hr/>
            
            <Row>
                <Col>
                    <ul>
                        <li onClick={()=>setContent("about")}>About</li>
                        <li onClick={()=>setContent("projects")}>Projects</li>
                        <li onClick={()=>setContent("contact")}>Contact</li>
                    </ul>
                </Col>
                <Col>
                    <ContentBox content={content}/>
                </Col>
            </Row>
        </Container>
    )
    
}