import { useEffect, useState } from "react"
import  faq  from "../API/faq.json"

export const Accordion = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(faq);
    }, [])
    return (
        <>
            <h1>Accordion</h1>
            <ul className="section-accordion">
                {
                    data.map((curElem) =>{
                        return(
                            <li>
                                <div className="accordion-grid">
                                    <p>{curElem.question}</p>
                                    <button>Show</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}