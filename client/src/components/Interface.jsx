import { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import 'react-typist/dist/Typist.css'

// components
import CommandLine from './CommandLine.jsx'
import Menu from './Menu.jsx'
import ContentBox from './ContentBox.jsx'


export default function Interface(props){
    const {delay} = props;
    
    const [content, setContent] = useState(null);
    const [selection, setSelection] = useState("");
    const [show, setShow] = useState(false);
    
    const serverString = "host@dwaynelaforce.dev:";
    
    return (
        <Container className="m-0 p-0">
            <Row className="" style={{minHeight: "400px"}}>
                <Col md>
                    <CommandLine serverString={serverString} 
                        dir="~ $ " text="cd menu/ " selection="" 
                        delay={500} hideWhenDone={true}/>
                    
                    <CommandLine serverString={serverString} 
                        dir="~/menu $ " text="ls -a " selection="" 
                        delay={3000} hideWhenDone={true}/>
                    
                    <Menu setSelection={setSelection} setContent={setContent} delay={5000}/>
                    
                    <CommandLine serverString={serverString} 
                        dir="~/menu $ " text="cd " selection={selection} 
                        delay={6000} hideWhenDone={true}/>
                </Col>
                <Col md>
                    <ContentBox content={content}/>
                </Col>
            </Row>
        </Container>
    );
}