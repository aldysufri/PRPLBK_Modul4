import { useState } from 'react';
import "./State.css";

export default function Index() {
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(0);
    const [user, setUser] = useState("");

    const countUp = () => setCount(count + 1);
    const countDown = () => setCount(count - 1);
    
    return (
        <div className="container">
            {show && (
                <>
                <div className="titleWrapper">
                    <p className="title">Input With UseState</p>
                </div>
                <div className="inputWrapper">
                    <div>
                        <input
                            placeholder="name"
                            size="50"
                            value=
                            {user} onChange={(event) => setUser(event.target.value)} />
                    </div>
                </div>
                </>
            )}
            <button className="Button" onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
            <div style={{ marginBlock: 30 }} />
            <p className="title">Counter with useState</p>
            <p className="countValue">{count}</p>
            <div className="btnWrapper">
                <button className="Button" onClick={countUp}>
                    Up Count
                </button>
                <button className="Button" onClick={countDown}>
                    Down Count
                </button>
            </div>
        </div>
    );
}
