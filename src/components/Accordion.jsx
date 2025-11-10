import { useEffect, useState } from "react"
import  faq  from "../API/faq.json"
import { FAQ } from "./UI/FAQ";

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
                        return <FAQ key = {curElem.id} curData = {curElem}/>
                    })
                }
            </ul>
        </>
    )
}