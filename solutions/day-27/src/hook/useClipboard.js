import { useState } from "react";

const useClipboard = () => {
    const [success, setSuccess] = useState(false);

    const resetSuccess = () => setSuccess(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => setSuccess(true));
    };

    return {
        success,
        resetSuccess,
        copyToClipboard,
    };
};

export default useClipboard;