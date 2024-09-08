import { useState } from "react";
import "./index.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* For making the whole background black*/}
            <div className="h-screen bg-black">
                {/* Heading */}
                <h1 className="text-white text-xl p-3 font-sans">
                    Password Generator
                </h1>
                {/* Container div*/}
                <div className=" mt-10 flex flex-col gap-10 items-center justify-center w-full">
                    {/*Input and Copy*/}
                    <div className="flex items-center justify-center">
                        <input
                            type="text"
                            name=""
                            id=""
                            className="border-2 border-solid border-white p-2 rounded-l-xl outline-none w-64"
                        />
                        <button
                            type="button"
                            className="bg-green-600 p-2.5 rounded-r-xl"
                        >
                            <i>Copy</i>
                        </button>
                    </div>

                    <div className="text-white">
                    <input type="range" id="myRange" value="90"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
