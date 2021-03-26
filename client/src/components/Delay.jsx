import {useState, useEffect} from 'react'
export default function Delay (props) {
    const {startDelay} = props;
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        setTimeout(() =>{
            setLoaded(true);
        },startDelay)
    },[])
    
    if (!loaded) return null;
    return props.children;
}