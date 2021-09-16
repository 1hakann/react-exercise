import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({name,description}) => {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <article className="question">
            <header>
                <h4>{name}</h4>
                <button className="btn" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            { showInfo && <p>{description}</p>}
        </article>
    )
}

export default Question