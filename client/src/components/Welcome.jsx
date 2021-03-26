import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Welcome(props){
    const [ipAddress, setIpAddress] = useState("fetching...");
    const ipifyUrl = "https://api.ipify.org";
    const ipifyGeoUrl = "https://geo.ipify.org/api/v1?apiKey=at_rK7y00bZLzKJk28Wd1o5hPBP95i1N&ipAddress=8.8.8.8"
    
    const [lastVisit, setLastVisit] = useState("");

    useEffect(() =>{
        // check last visit and update
        const cookies = window.localStorage;
        const now = new Date().toString();
        if (!cookies.getItem("lastVisit")) {
            setLastVisit(now)
        } else {
            setLastVisit(cookies.getItem("lastVisit"));
        }
        cookies.setItem("lastVisit", now);
        
        // fetch user's public IP address from ipify
        console.log("sending API request for basic IP info");
        axios.get(ipifyUrl)
        .then((response)=>{
            console.log(response);
            setIpAddress(response.data);

            // fetch user's complete IP information
            console.log("sending API request for full IP info");
            axios.get(ipifyGeoUrl, {params:{ipAddress:response.data}})
                .then(res => {
                    console.log(res);
                    const isp = res.data.isp;
                    const city = res.data.location.city;
                    const state = res.data.location.region;
                    setIpAddress(`${response.data} | ${city}, ${state} | ${isp}`)
                })
                .catch(err => console.log(err));
        })
        .catch((error)=>{
            console.log(error);
            setIpAddress("error retrieving IP address, try disabling ad blocker");
        });
        
        
    },[])
    
    
    return (
        <>
            <p>
                <span style={{color:"#00fff7"}}>Welcome </span> 
                <span>to dwaynelaforce.dev</span>
                <br/>
                <span>Your public IP address is: </span>
                <span style={{color:"#00fff7"}}>{ipAddress}</span>
                <br/>
                <span>Last Visit: </span>
                <span style={{color:"#00fff7"}}>{lastVisit}</span>
            </p>
        </>
    )
}