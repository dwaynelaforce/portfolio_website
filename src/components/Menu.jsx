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
            <ul className="menu">
                <li onMouseEnter={()=>setSelection("about/")}
                    onClick={()=>{setContent("about")}}
                    className="mb-3 py-1 px-3 menuitem">
                        About
                </li>
                <li onMouseEnter={()=>{setSelection("projects/")}}
                    onClick={()=>setContent("projects")}
                    className="mb-3 py-1 px-3 menuitem">
                        Projects
                </li>
                <li onMouseEnter={()=>{setSelection("contact/")}}
                    onClick={()=>{setContent("contact")}}
                    className="mb-3 py-1 px-3 menuitem">
                        Contact
                </li>
            </ul>
        );
    }

}