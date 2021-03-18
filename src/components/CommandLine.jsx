import {useEffect, useState} from 'react'
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'

export default function CommandLine(props){
    const {serverString, dir, text, delay, selection, hideWhenDone} = props;
    const [show, setShow] = useState(false);
    useEffect(() =>{
        setTimeout(() =>{
            setShow(true);
        },delay)
    },[])
    
    if (!show) {
        return null;
    } else {
        return (
            <p>
                <span style={{color:"#00ff62"}}>{serverString}</span>
                <span style={{color:"#ff00ff"}}>{dir}</span>
                <Typist className="d-inline" startDelay={1000} cursor={
                    {
                        show: true,
                        blink: true,
                        element: '|',
                        hideWhenDone: hideWhenDone,
                        hideWhenDoneDelay: 500,
                    }
                }>
                <span>{text} </span>
                </Typist>
                <span>{selection}</span>
            </p>
        );
    }
}