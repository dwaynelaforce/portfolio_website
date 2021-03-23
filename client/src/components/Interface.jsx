import { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import 'react-typist/dist/Typist.css'

// components
import Welcome from './Welcome.jsx'
import CommandLine from './CommandLine.jsx'
import Menu from './Menu.jsx'
import ContentBox from './ContentBox.jsx'


export default function Interface(props){
    const {delay} = props;
    
    const [content, setContent] = useState(null);
    const [selection, setSelection] = useState("");
    const [show, setShow] = useState(false);
    
    const serverString = "host@dwaynelaforce.dev:";
    
    setTimeout(() => setShow(true), delay);

    if (!show) {
        return null;
    } else {
        return (
            <Container className="m-0 p-0">
                <Welcome/>
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


    // return(
    //     <Row className="mt-5" style={{minHeight: "400px"}}>
    //         <Col>
    //             <p>
    //                 Welcome to dwaynelaforce.dev v0.1 user@192.168.1.1
    //                 <br/>
    //                 Last Visit: 01 Jan 1970 00:00:00
    //             </p>
    //             <p>{serverString} ls -a</p>
    //             <ul style={{listStyle:"none"}}>
    //                 <li onMouseEnter={()=>{setSelection("cd About/")}}
    //                     onClick={()=>setContent("about")}>
    //                         About
    //                 </li>
    //                 <li onMouseEnter={()=>{setSelection("cd Projects/")}}
    //                     onClick={()=>setContent("projects")}>
    //                         Projects
    //                 </li>
    //                 <li onMouseEnter={()=>{setSelection("cd Contacts/")}}
    //                     onClick={()=>{setContent("contact")}}>
    //                         Contact
    //                 </li>
    //             </ul>
    //             <p>{serverString} {selection}</p>
    //         </Col>
    //         <Col>
    //             <ContentBox content={content}/>
    //         </Col>
    //     </Row>
    // );
}