import React, { useState } from 'react'
import Sidebar from './components/sidebar'
import "./styles/question.css";
import questions from './data/questions.json'

function qData(top) {
    let topicQuestions = [];
    questions.forEach(q => {
        if (q.topic === top) {
            topicQuestions.push(
                <div className='questionBlock'>
                    <h4>{q.question}</h4>
                    <ol>
                        <li>{q.options[0]}</li> 
                        <li>{q.options[1]}</li> 
                        <li>{q.options[2]}</li> 
                        <li>{q.options[3]}</li> 
                    </ol>
                    <details>
                        <summary>view Answer</summary>
                        <p>{q.answer}</p>
                    </details>
                </div>
            );
        }
    });
    return(
        <>
            {topicQuestions}
       </>
    );
}

function Question()
{
    const [topic, settopic] = useState("DSA")
    return(
        <div className='Question'>
            <Sidebar />
            <div className='Questions'>
            <div className='content-q'>
                <h1>Question Bank</h1>
                <div className='topics'>
                    <button id='DSA' className='topic' onClick={() => settopic("DSA")}>DSA</button>
                    <button id='Web Development' className='topic' onClick={() => settopic("Web Development")}>Web Development</button>
                    <button id='Networks' className='topic' onClick={() => settopic("Networks")}>Networks</button>
                    <button id='DBMS' className='topic' onClick={() => settopic("DBMS")}>DBMS</button>
                    <button id='topic5' className='topic' onClick={() => settopic("topic5")}>topic5 </button>
                    <button id='topic6' className='topic' onClick={() => settopic("topic6")}>topic6</button>
                    <button id='topic7' className='topic' onClick={() => settopic("topic7")}>topic7</button>
                    <button id='topic8' className='topic' onClick={() => settopic("topic8")}>topic8</button>
                    <button id='topic9' className='topic' onClick={() => settopic("topic9")}>topic9</button>
                </div>
                <div className='questions'>
                    <h2 className='topicTitle'>Topic: {topic}</h2>
                    {qData(topic)}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Question;