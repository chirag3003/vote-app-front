import React from "react";
import { ArrowDown, ArrowUp } from "react-feather";

function Question() {
    return (
        <div className="question p-4 px-6  bg-gray-800 text-white">
            <div className="question w-full p-2">
                <div className="image">
                    <img src="https://avatars.githubusercontent.com/u/68195580?v=4" alt="" className="h-40 w-40 rounded-full mx-auto mb-4"/>
                </div>
                <div className="text px-4">
                    <div className="username">
                        <h2 className="text-4xl font-bold text-center">Code.Chirag</h2>
                    </div>
                    <div className="description my-3 text-lg">Currently a 17 year old developer</div>
                </div>
            </div>
            <div className="btns w-full flex items-end ">
                <button className={"w-1/2 bg-red-100 py-4"}>
                    <ArrowDown className="text-red-600 mx-auto" />
                </button>
                <button className={"w-1/2 bg-green-100 py-4"}>
                    <ArrowUp className="text-green-600 mx-auto" />
                </button>
            </div>
        </div>
    );
}

export default Question;
