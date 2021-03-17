import { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'

// components
import CommandLine from './CommandLine.jsx'
import Menu from './Menu.jsx'
import ContentBox from './ContentBox.jsx'


export default function Interface(props){
    const [content, setContent] = useState(null);
    const [selection, setSelection] = useState("");
    const [show, setShow] = useState(false);
    
    const myDelay = 3250;
    const serverString = "server@dwaynelaforce.dev:~$ ";
    
    setTimeout(() =>{
        setShow(true);
    },myDelay);

    if (!show) {
        return null;
    } else {
        return (
            <Row className="" style={{minHeight: "400px"}}>
            <Col>
                <p>
                    Welcome to dwaynelaforce.dev
                    <br/>
                    Your IP address is: 192.168.1.1
                    <br/>
                    Last Visit: 01 Jan 1970 00:00:00
                </p>
                <CommandLine serverString={serverString} 
                    text="ls -a " selection="" 
                    delay={500} hideWhenDone={true}/>
                
                <Menu setSelection={setSelection} setContent={setContent} delay={2000}/>
                
                <CommandLine serverString={serverString} 
                    text="cd " selection={selection} 
                    delay={2500} hideWhenDone={true}/>
            </Col>
            <Col>
                <ContentBox content={content}/>
            </Col>
        </Row>
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