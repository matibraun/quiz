import React, {useState} from "react";

const QuestionBox = ({question, options, selected}) => {
    
    const [answer, setAnswer] = useState(null);

    return (
        <div className="questionBox">

            <div className="question">{question}</div>

            {answer
            
            ? 
            <div>
                <button disabled={true}>{answer}</button>
                <div>Correcto</div>
            </div>
            
            :
            options.map((text, index) => (
                <button key={index} className="answerBtn" onClick={() => {
                    setAnswer(text);
                    selected(text);
                }}>
                    {text}
                </button>
            ))
            }

        </div>
    )
}

export default QuestionBox

// Destructuring args
