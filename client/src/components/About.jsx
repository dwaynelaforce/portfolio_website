import Container from 'react-bootstrap/Container'
import {useState} from 'react'

export default function About() {
    const [show, setShow] = useState("tldr");
    
    function switchShow() {
        if (show === "tldr") {
            setShow("story");
        } else {
            setShow("tldr");
        }
    }
    
    return(
        <Container>
            <h4>About Me</h4>
            <h5>TL;DR</h5>
            <p>Languages / Frameworks</p>
            <ul>
                <li>Python: Django, Flask</li>
                <li>Java: Spring Boot</li>
                <li>JavaScript: Node.js, Express.js, React, jQuery</li>
            </ul>
            <p>Other / Misc.</p>
            <ul>
                <li>MySQL, SQLite, MongoDB</li>
                <li>AWS EC2, LightSail</li>
                <li>NGINX, Apache</li>
                <li>Bash, Git, Ubuntu, Debian</li>
            </ul>
            <p>Please visit my <a href="http://linkedin.com/in/dwaynelaforce">LinkedIn</a> for detailed work history and background.</p>
            <h4>My story</h4>
            <p>I went to school for music</p>
        </Container>
    );
}