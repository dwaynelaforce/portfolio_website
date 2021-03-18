import {useState, useEffect} from 'react'
export default function Menu(props) {
    const [show, setShow] = useState(false);
    const {setSelection, setContent, delay} = props;
    useEffect(() =>{
        const timer = setTimeout(()=>{
            setShow(true);
        },delay);
        return () => clearTimeout(timer);
    },[])
    
    if (!show) {
        return null;
    } else {
        return (
            <ul style={{listStyle:"none"}}>
                <li onMouseEnter={()=>{setSelection("About/")}}
                    onClick={()=>{setContent("about")}}
                    className="mb-2">
                        About
                </li>
                <li onMouseEnter={()=>{setSelection("Projects/")}}
                    onClick={()=>setContent("projects")}
                    className="mb-2">
                        Projects
                </li>
                <li onMouseEnter={()=>{setSelection("Contacts/")}}
                    onClick={()=>{setContent("contact")}}
                    className="mb-2">
                        Contact
                </li>
            </ul>
        );
    }

}