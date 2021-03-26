import {useState} from 'react'

import LoadingBarBox from './LoadingBarBox.jsx'


export default function LoadingComponent(props){
    const {componentToRender, delay, loadingInterval} = props;
    const [loaded, setLoaded] = useState(false);
    return null
}