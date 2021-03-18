import {useState, useEffect} from 'react'

import LoadingBar from './LoadingBar.jsx'

export default function LoadingBarBox(props) {
    const [loadPercentage, setLoadPercentage] = useState(0);
    const [loadString, setLoadString] = useState("--------------------------------------------------");
    const [loaded, setLoaded] = useState(false);
    const {delay} = props;
    
    const loadingInterval = 15;

    useEffect(()=>{
        let i = 0;
        const myInterval = setInterval(()=>{
            setLoadPercentage(i);
            updateLoadString(i)
            i++;
            if (i > 100) {
                clearInterval(myInterval);
                setTimeout(()=>setLoaded(true), delay);
            }
        }, loadingInterval);
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
    
    if (!loaded) {
        return(
            <p>
                Loading ...
                <br/>
                <LoadingBar string={loadString} percent={loadPercentage}/>
            </p>
        );
    } else {
        return null
    }
    
    
}