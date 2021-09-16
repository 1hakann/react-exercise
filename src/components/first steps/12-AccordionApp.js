import React, {useState} from 'react'
import {url} from '../../data/tour'
import SingleQuestion from './Question'

function AccordionApp() {
    const [questions, setQuestions] = useState(url)

    return (
        <div className="container">
            <h3 style={{ textAlign: 'center', margin: 'auto', float: 'right', paddingTop:'30px' }}>questions and answers about login</h3>
            <section>
                {
                    questions.map((question) => {
                        return (
                            <SingleQuestion key={question.id} {...question} />
                        )
                    })
                }
            </section>
        </div>
    )
}

export default AccordionApp