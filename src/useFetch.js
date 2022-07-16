import { useEffect, useState } from "react"
import axios from 'axios';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(url).then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    const refetch = () => {
        setLoading(true);
        axios.get(url).then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }
    const useAuth=()=>{
        var cookies= document.cookie.split(';').map(cook=> cook.split('=')).reduce((acc,[key,value])=>({...acc,[key.trim()]:value}),{});
        console.log(cookies);
        return cookies;
    
    }
    return { data, loading, error, refetch,useAuth };
}