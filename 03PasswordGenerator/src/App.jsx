import { useCallback, useState, useEffect, useRef } from "react";
import "./index.css";

function App() {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    //useRef hook
    const passwordRef = useRef()


    // I used callback hook here useCallback(fn, [depdendencies])

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "";

        str += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numAllowed) str += "0123456789";

        if (charAllowed) str += "!@#$%^&*(){}";

        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(index);
        }

        setPassword(pass);
    }, [length, numAllowed, charAllowed, setPassword]);

    // Funtion for copying password to Clipboard
     const copyPassToClip = () =>{
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
     }

useEffect(() => passwordGenerator(), [ length, numAllowed, charAllowed, setPassword])

    return (
        <>
            {/* For making the whole background black*/}
            <div className="h-screen bg-slate-900">
                {/* Heading */}
                <h1 className=" pt-10 text-white text-4xl p-3 font-mono text-center">
                    Password Generator
                </h1>
                {/* Container div*/}
                <div className=" mt-20 flex flex-col gap-10 items-center justify-center w-full text-xl">
                    {/*Input and Copy*/}
                    <div className="flex items-center justify-center">
                        <input
                            type="text"
                            value={password}
                            readOnly
                            ref={passwordRef}
                            className="border-2 border-solid border-white p-2 rounded-l-xl outline-none w-64"
                        />
                        <button
                            type="button"
                            className="bg-green-600 p-2.5 rounded-r-xl"
                            onClick={ copyPassToClip }
                        >
                            <i>Copy</i>
                        </button>
                    </div>
                    {/*Range and other elements*/}
                    <div className="text-white flex justify-center gap-5">
                        <input
                            type="range"
                            min={8}
                            max={100}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => {
                                setLength(e.target.value);
                            }}
                        />
                        <label for>Length: {length}</label>

                        <label for="number1">
                            <input
                                type="checkbox"
                                defaultChecked={numAllowed}
                                id="numberInput"
                                onChange={() => {
                                    setNumAllowed((prev) => !prev);
                                }}
                            />
                            Numbers
                        </label>

                        <label for="number1">
                            <input
                                type="checkbox"
                                defaultChecked={charAllowed}
                                id="charInput"
                                onChange={() => {
                                    setCharAllowed((prev) => !prev);
                                }}
                            />
                            Symbols
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
