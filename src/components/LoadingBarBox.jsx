import {useState, useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LoadingBar from './LoadingBar.jsx'

export default function LoadingBarBox(props) {
    const [loadPercentage, setLoadPercentage] = useState(0);
    const [loadString, setLoadString] = useState("--------------------------------------------------");
    const {setLoaded} = props;

    useEffect(()=>{
        let i = 0;
        const myInterval = setInterval(()=>{
            setLoadPercentage(i);
            updateLoadString(i)
            i++;
            if (i > 100) {
                clearInterval(myInterval);
                setTimeout(()=>setLoaded(true), 500);
            }
        },25);
    },[]);
    
    function updateLoadString(percent) {
        const hashes = Math.floor(percent / 2);
        const dashes = 50 - hashes;
        let myString = "";
        for (let i = 0; i < hashes; i++) {
            myString += "#";
        }
        for (let i = 0; i < dashes; i++) {
            myString += "-";
        }
        setLoadString(myString);
    }
    

    return(
        <>
            <p>Loading ...</p>
            <LoadingBar string={loadString} percent={loadPercentage}/>
        </>
    );
}