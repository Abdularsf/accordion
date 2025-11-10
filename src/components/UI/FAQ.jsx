export const FAQ = ({curData}) => {

    const {question,answer} = curData;
    
    return (
        <li>
            <div className="accordion-grid">
                <p>{question}</p>
                <button>Show</button>
            </div>
            <p>{answer}</p>
        </li>
    )
}