import { useEffect, useState } from "react"
import faq from "../API/faq.json"
import { FAQ } from "./UI/FAQ";

export const Accordion = () => {
    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(false);

    useEffect(() => {
        setData(faq);
    }, [])

    const handleToggle = (id) => {
        setActiveId((prevId) => (prevId === id ? false : id));
    };

    return (
        <>
            <h1>Accordion</h1>
            <ul className="section-accordion">
                {
                    data.map((curElem) => {
                        return <FAQ
                            key={curElem.id}
                            curData={curElem}
                            isActive={curElem.id === activeId}
                            onToggle={() => handleToggle(curElem.id)}
                        />
                    })
                }
            </ul>
        </>
    )
}