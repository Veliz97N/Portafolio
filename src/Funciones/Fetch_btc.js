import { useEffect, useState } from "react";


export const Fetch_btc = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
            .then( response =>{
                return response.json();
            })
            .then( data => {
                setState(data);
                console.log(data);
            })
    }, [])
    return state;
}