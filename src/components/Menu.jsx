import {useState, useEffect} from 'react'
export default function Menu(props) {
    const [show, setShow] = useState(false);
    const {setSelection, setContent, delay} = props;
    useEffect(() =>{
        setTimeout(()=>{
            setShow(true);
        },delay)
    },[])
    
    if (!show) {
        return null;
    } else {
        return (
            <ul style={{listStyle:"none"}}>
                <li onMouseEnter={()=>{setSelection("About/")}}
                    onClick={()=>{setContent("about")}}>
                        About
                </li>
                <li onMouseEnter={()=>{setSelection("Projects/")}}
                    onClick={()=>setContent("projects")}>
                        Projects
                </li>
                <li onMouseEnter={()=>{setSelection("Contacts/")}}
                    onClick={()=>{setContent("contact")}}>
                        Contact
                </li>
            </ul>
        );
    }

}