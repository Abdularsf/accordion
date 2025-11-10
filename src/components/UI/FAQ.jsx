import { useState } from "react";

export const FAQ = ({curData}) => {

    const {question,answer} = curData;
    const [activeId,setIsActiveId] = useState(false);

    const handleButton = () => {
        setIsActiveId(!activeId);
    }

    return (
        <li>
            <div className="accordion-grid">
                <p>{question}</p>
                <button onClick={handleButton}>{activeId?"Close":"Show"}</button>
            </div>
            <p>{activeId && answer}</p>
        </li>
    )
}