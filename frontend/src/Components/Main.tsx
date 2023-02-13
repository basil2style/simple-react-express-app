import React, { useState } from 'react';
import './style.css';

function Main() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setError] = useState("");
    const [nativeNumber, setNumber] = useState("");
    const fetchData = async () => {
        setData([]);
        setError("");
        setIsLoading(true);
        try {
            const response = await fetch(
                `http://localhost:3001/prime/median/${nativeNumber}`,
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json"
                    }
                });
            if (!response.ok) {
                // throw new Error(`Error! status: ${response.status}`);
                const result = await response.json();
                console.log("error:", result.error)
                setError(result.error);
            }
            else {
                const result = await response.json();
                console.log('result', JSON.stringify(result.message))
                setData(result.message);
            }

        } catch (err) {
            console.log("Error", err)
            setError("Error");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="center-div">
            <h1>Find the median of prime numbers </h1>
            <input
                type="number"
                data-testid="enter-number"
                placeholder="Enter the number limit:"
                value={nativeNumber}
                onChange={e => {
                    setNumber("" + Number(e.target.value));
                }}
            />
            <button data-testid="get-data" onClick={fetchData}>Get data</button>

            {isLoading && <h2 data-testid="loading">Loading...</h2>}
            {(data.length > 0) && <h2>Median of Prime numbers are: {data.join(",")}</h2>}
            {err && <h2>Error: {err}</h2>}
        </div>
    )
}

export default Main