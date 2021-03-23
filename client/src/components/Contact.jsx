import axios from 'axios'
import {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


export default function Contact(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    
    function submitHandler(e) {
        e.preventDefault();
        const userData = {name, email, message};
        console.log("making post request to backend server API");
        axios.post('http://localhost:8000/api', userData)
            .then(res =>{
                console.log(res);
                window.alert("Email sent successfully");
                // resets the form
                e.target.reset();
            })
            .catch(err=>{
                console.log(err);
                window.alert("There was an issue sending the email");
            });
    }

    return(
        <Form onSubmit={submitHandler}>
            <h4>Hiring? Need something built?</h4>
            <p>Send me a message</p>
            <Row>
                <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your name" 
                    onChange={(e)=>setName(e.target.value)}
                    style={{backgroundColor:"black", color:"inherit"}}
                    required/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Your email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    style={{backgroundColor:"black", color:"inherit"}}
                    required/>
                </Form.Group>
            </Row>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" as="textarea" rows={3} placeholder="Write your message to me here" 
                onChange={(e)=>setMessage(e.target.value)}
                style={{backgroundColor:"black", color:"inherit"}}
                required/>
            </Form.Group>
            <Button type="submit" variant="outline-light">Send</Button>
        </Form>
    );
}