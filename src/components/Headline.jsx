import { useState } from 'react'
export default function Headline(props){
    const [show, setShow] = useState(false);
    const {delay} = props;
    
    setTimeout(() =>setShow(true), delay)

    if (!show) {
        return null;
    } else {
        return (
            <>
                
                <h1 className="display-2">Dwayne LaForce</h1>
                <h1>Full Stack Developer</h1>
                <h5>Java Springboot | Python Django | JavaScript MERN</h5>
                <hr style={{borderColor:"white"}}/>
            </>
        );
    }

}