import { useEffect, useState } from "react";

const useInitialState = (API) => {

    const [ item, setItem ] = useState([])

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setItem(data));
    }, []);

    return item;
}

export default useInitialState;