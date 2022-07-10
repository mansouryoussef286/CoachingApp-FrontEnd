import { useEffect, useState } from "react"
import axios from 'axios';

export const useFetchpost = (url, body) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.post(url, body).then((response) => {
                setData(response.data);
                setStatus(response.status);
            })
            .catch((err) => {
                console.log(err);
                setData(null);
                setStatus(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    const refetch = (body2) => {
        setLoading(true);
        axios.post(url, body2).then((response) => {
                setData(response.data);
                setStatus(response.status);
            })
            .catch((err) => {
                console.log(err);
                setData(null);
                setStatus(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }
    return { data, loading, error, status, refetch };
}