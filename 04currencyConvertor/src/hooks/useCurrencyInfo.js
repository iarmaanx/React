import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
        )
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((error) => console.error(' ⚠️⚠️⚠️⚠️ API error is there', error)); // Add error handling
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
