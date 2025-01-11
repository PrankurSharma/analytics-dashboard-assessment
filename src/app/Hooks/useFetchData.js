import { useEffect, useState } from "react"

export const useFetchData = () => {
    const [data, setData] = useState();

    useEffect(() => {
        console.log("Getting the data...");
        fetch("/data.csv").then(async (res) => {
            const text = await res.text();
            const rows = text.split("\n");
            const headers = rows[0].split(",");
            const data = rows.slice(1).map((row) => {
                const values = row.split(",");
                const obj = {};
                headers.forEach((header, idx) => {
                    obj[header.trim()] = values[idx] ? values[idx].trim() : ""
                });
                return obj;
            });
            setData(data);
        }).catch((err) => {
            console.log("something went wrong...", err);
        });

        return (() => {
            setData();
        });
    }, []);
    return [data, setData];
}