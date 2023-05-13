import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./ProgresBar.css";

const ProgresBar = ({ percentage }) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div class="progress progresBarBox">
                <div
                    className={
                        count % 2 === 0
                            ? "progress-bar progress-bar-striped progress-bar-animated"
                            : "progress-bar progress-bar-striped"
                    }
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {`${percentage}%`}
                </div>
            </div>
            <div className="buttonDiv">
                <button
                    onClick={() => setCount(count + 1)}
                    className="btn btn-primary"
                >
                    {count % 2 === 0 ? "Stop" : "Start"}
                </button>
            </div>
        </>
    );
};

export default ProgresBar;
