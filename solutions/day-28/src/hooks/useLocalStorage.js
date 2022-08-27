import { useState, useEffect } from "react";

const useLocalStorage = (key, initialState) => {
    const [state, setState] = useState(() => {
        const storageData = localStorage.getItem(key);

        if (storageData) {
            return JSON.parse(storageData);
        }

        if (typeof initialState === 'function') {
            return initialState();
        } else {
            return initialState;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
};

export default useLocalStorage;