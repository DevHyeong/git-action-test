import React, {useState, useEffect} from "react";
import axios from "axios";



const Hello = () => {
    const [hello, setHello] = useState();

    const data = async () => {
        const response = await axios.get("/api/hello");
        setHello(response.data);
    }
    
    useEffect(() => {
        data();
    }, []);

    return (
        <>
            {hello}
        </>
    )
}

export default Hello;