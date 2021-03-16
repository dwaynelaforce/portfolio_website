import {useState, useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LoadingBar from './LoadingBar.jsx'

export default function LoadingBarBox() {
    const [loadPercentage, setLoadPercentage] = useState(0);
    const [loadString, setLoadString] = useState("--------------------------------------------------");
    const [dashes, setDashes] = useState(50);
    const [hashes, setHashes] = useState(0);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        let i = 0;
        const myInterval = setInterval(()=>{
            setLoadPercentage(i);
            i++;
            if (i > 100) clearInterval(myInterval);
        },25);
    },[]);

    

    return(
        <>
            <p>This is the LoadingBarBox .jsx Component</p>
            <LoadingBar string={loadString} percent={loadPercentage}/>
        </>
    );
}