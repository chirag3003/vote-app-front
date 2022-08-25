import React, {useState} from 'react';
import {Plus} from "react-feather"
import axios from "axios";
import cheerio from "cheerio"

function AccountImportInput(props) {
    const [input,setInput] = useState("")
    async function onClick(){
        if(input.trim() === ""){
            return;
        }
        const url = `https://instagram.com/${input}`
        let error ;
        const {data} = await axios.get(url,{
            headers:{
                origin:'https://instagram.com',
                referrer:'https://instagram.com'
            },

        }).catch(err => error = err )
        if(error) {
            console.error(error);
            return;
        }
        console.log(data)
        const $ = cheerio.load(data)
    }
    return (
        <div className={"p-4 w-full bg-gray-800 mb-5 "}>
            <div className="input flex w-full h-10">
                <input type="text" value={input} onChange={evt => setInput(evt.target.value)} className={"h-full w-11/12 bg-gray-700 px-2"}/>
                <button onClick={onClick} className={"w-1/12 h-full text-center bg-green-100"}>
                    <Plus className={"text-green-600 h-7 w-7 mx-auto"}/>
                </button>
            </div>
        </div>
    );
}

export default AccountImportInput;