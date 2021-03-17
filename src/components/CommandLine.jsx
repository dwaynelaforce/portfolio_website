import {useEffect, useState} from 'react'
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'

export default function CommandLine(props){
    const {serverString, text, delay, selection, hideWhenDone} = props;
    const [show, setShow] = useState(false);
    useEffect(() =>{
        setTimeout(() =>{
            setShow(true);
        },delay)
    },[])
    
    if (!show) {
        return null;
    } else {
        console.log("CommandLine.jsx is rendering");
        return (
            <p>
                {serverString}
                <Typist className="d-inline" startDelay={500} cursor={
                    {
                        show: true,
                        blink: true,
                        element: '|',
                        hideWhenDone: hideWhenDone,
                        hideWhenDoneDelay: 750,
                    }
                }>
                    <span>{text} </span>
                </Typist>
                <span>{selection}</span>
            </p>
        );
    }
}