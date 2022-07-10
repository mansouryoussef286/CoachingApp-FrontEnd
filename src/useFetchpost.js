import { useEffect, useState } from "react"
import axios from 'axios';

export const useFetchpost = (url, body) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.post(url, body).then((response) => {
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
        axios.post(url, body).then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }
    return { data, loading, error, refetch };
}