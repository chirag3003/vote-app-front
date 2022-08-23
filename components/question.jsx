import React from "react";
import { ArrowDown, ArrowUp } from "react-feather";

function Question() {
    return (
        <div className="question p-4 px-6 flex bg-gray-800 text-white">
            <div className="question flex-1 p-2">
                <div className="text">
                    Is this ok?Is this ok?Is this ok?Is this ok?Is this ok?Is this ok?Is this ok?Is
                    this ok?Is this ok?Is this ok?Is this ok?Is this ok?Is this ok?Is this ok?Is
                    this ok?Is this ok?Is this ok?Is this ok?Is this ok?Is this ok?Is this ok?Is
                    this ok?Is this ok?Is this ok?Is this ok?Is this ok?Is this ok?Is this ok?Is
                    this ok?Is this ok?Is this ok?Is this ok?Is this ok?
                </div>
            </div>
            <div className="btns flex items-end ">
                <button>
                    <ArrowDown className="text-red-500 mx-2" />
                </button>
                <button>
                    <ArrowUp className="text-green-500" />
                </button>
            </div>
        </div>
    );
}

export default Question;
