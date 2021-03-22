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
        axios.post('http://localhost:8000/api', userData)
            .then(res =>{
                window.alert("Email sent successfully");
                console.log(res);
            })
            .catch(err=>{
                window.alert("There was an issue sending the email");
                console.log(err);
            });
    }

    return(
        <Form onSubmit={submitHandler}>
            <h4>Send me a message</h4>
            <p>(pls dont break my legs)</p>
            <Row>
                <Form.Group as={Col} lg>
                    <Form.Control name="name" type="text" placeholder="Your name" 
                    onChange={(e)=>setName(e.target.value)}
                    required/>
                </Form.Group>
                <Form.Group as={Col} lg>
                    <Form.Control name="email" type="email" placeholder="Your email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    required/>
                </Form.Group>
            </Row>
            <Form.Group>
                <Form.Control name="message" as="textarea" rows={3} placeholder="Write your message to me here" 
                onChange={(e)=>setMessage(e.target.value)}
                required/>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    );
}