import React, { useState } from "react";
import questions from "./questions.json";
// import "./MCQpage.css";

const MCQpage = () => {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const handleAnswerOption = (que, answer) => {
//     // let key = que;
//     setSelectedOptions([...selectedOptions, answer]);
//     setSelectedOptions({...selectedOptions});
//     console.log(selectedOptions);
//   };
  let currentQuestion = 0;
  return (
    <div className="flex flex-col w-screen px-5 h-screen items-center text-black">
      {questions.results.map((e, index) => (
        <div key={index} className="p-4 m-3 w-full lg:w-3/5 shadow-lg rounded-lg">
          {/* {console.log(e.title)} */}
          <h4 className="mt-1 text-md">
            Question {++currentQuestion} of {questions.results.length}
          </h4>
          <div className="mt-3 mb-3 text-2xl">{e.title}</div>

          {/* Render answer options */}
          {e.content_options.map((answer, indexinner) => (
            <div key={indexinner} className="ml-3">
              <input
                className=""
                type="radio"
                name={index}
                value={answer.options_text}
                id={answer.options_text}
                // onChange={(e) => handleAnswerOption(e.title, answer.options_text)}
                // checked={
                //     answer.options_text === selectedOptions[currentQuestion]?.answerByUser
                //   }
              />
              <label className="ml-3" htmlFor={answer.options_text}>
                {answer.options_text}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MCQpage;
