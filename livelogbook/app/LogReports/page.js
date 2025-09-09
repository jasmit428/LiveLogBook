"use client"
import Header from "../components/header"
import { useState } from "react";
import { getAllLog } from "../_services/services";

export default function Page() {
    const [logs, setLogs] = useState([]);

    const fetchLogs = async () => {
        const fetchedLogs = await getAllLog();
        setLogs(fetchedLogs);
    };

    return (
        <div>
            <Header />
            <div className="text-black m-4 sm:m-10 bg-gray-200 min-h-[240px] min-w-[80%] rounded-2xl">
                <div className="text-center">
                    <button
                        onClick={fetchLogs}
                        className="text-white text-xl sm:text-3xl w-full sm:w-1/2 rounded-xl mt-8 sm:mt-32 bg-blue-600 hover:bg-blue-700 px-8 sm:px-24 py-4 sm:py-10"
                    >
                        Get Logs
                    </button>
                </div>
                <div className="p-2 sm:p-5">
                {logs.map((doc, index) => (
            <div
                key={index}
                className="bg-blue-600 text-white text-center mt-6 sm:mt-12 m-2 sm:m-4 p-8 sm:p-16 border-2 border-gray-400 rounded-lg max-w-full lg:w-86 sm:max-w-[80%] shadow-xl"
            >
                {Object.entries(doc).map(([key, value]) => (
                    <div key={key} className="flex flex-row mt-3 text-center">
                        <span className="font-bold mr-2">{key}:</span>
                        <span>{value}</span>
                    </div>
                ))}
            </div>
        ))}

                </div>
            </div>
        </div>
    );
}