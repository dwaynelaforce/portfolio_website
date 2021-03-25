import Container from 'react-bootstrap/Container'
import { useState } from 'react'
export default function Headline(props){
    const [show, setShow] = useState(false);
    const {delay} = props;
    
    setTimeout(() =>setShow(true), delay)

    if (!show) {
        return null;
    } else {
        return (
            <Container className="p-0">
                <h1 className="display-2">Dwayne LaForce</h1>
                <h1>Full Stack Developer</h1>
                {/* <h5>Java Springboot | Python Django | JavaScript MERN</h5> */}
                <br/>
                <hr className="my-2" style={{borderColor:"white"}}/>
                <br/>
            </Container>
        );
    }

}