import React , {useState} from "react";

const App = () =>{
    const [input, setInput] = useState('');
    return (
        <div>
            <div className="input">
                <textarea onChange={(e) => setInput(e.target.value)}></textarea>
            </div>
            <div className="output">
                <h1>{input}</h1>
            </div>
        </div>
    )
}

export default App;