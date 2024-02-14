import React, { useState } from "react";
import questions from "./questions.json";
import { useParams } from "react-router-dom";
const MCQpage = () => {
  const { id } = useParams();
  const url = import.meta.env.VITE_BASE_URL;
  const module_id = localStorage.getItem("module_id");
  const content_id = localStorage.getItem("content_id");
  const [selectedAnswers, setSelectedAnswers] = useState(
    questions.results.map(() => "")
  );
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerSelection = (selectedOption) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.results.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.results.forEach((question, index) => {
      if (question.content_options[selectedAnswers[index]].is_correct) {
        correctCount++;
      }
    });
    setCorrectAnswersCount(correctCount);
    setQuizSubmitted(true);

    const postData = {
      user:1, // Replace userId with the actual user ID
      course: id, // Replace courseId with the actual course ID
      // module_id: 1, // Replace moduleId with the actual module ID
      // content_id: contentId, // Replace contentId with the actual content ID
      answers: selectedAnswers // Assuming selectedAnswers is an array of selected options
    };
    console.log(`${url}submit_answers/`)
    fetch(`${url}submitanswers/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    .then(response => {
      if (response.ok) {
        // Handle success response
        console.log('Answers submitted successfully!');
      } else {
        // Handle error response
        console.error('Failed to submit answers');
      }
    })
    .catch(error => {
      console.error('Error submitting answers:', error);
    });
  };

  return (
    <div className="flex flex-col w-screen px-5 h-screen items-center text-black">
      {!quizSubmitted ? (
        <>
          <div className="p-4 m-3 w-full lg:w-3/5 shadow-lg rounded-lg">
            <h4 className="mt-1 text-md">
              Question {currentQuestionIndex + 1} of {questions.results.length}
            </h4>
            <div className="mt-3 mb-3 text-2xl">
              {questions.results[currentQuestionIndex].title}
            </div>
            {questions.results[currentQuestionIndex].content_options.map(
              (answer, answerIndex) => (
                <div key={answerIndex} className="ml-3">
                  <input
                    type="radio"
                    name={`question_${currentQuestionIndex}`}
                    value={answerIndex}
                    id={`question_${currentQuestionIndex}_${answerIndex}`}
                    checked={selectedAnswers[currentQuestionIndex] === answerIndex}
                    onChange={() => handleAnswerSelection(answerIndex)}
                  />
                  <label
                    className="ml-3"
                    htmlFor={`question_${currentQuestionIndex}_${answerIndex}`}
                  >
                    {answer.options_text}
                  </label>
                </div>
              )
            )}
          </div>
          <div className="flex">
            <button
              className="btn"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              className="btn"
              onClick={handleNextQuestion}
              disabled={
                currentQuestionIndex === questions.results.length - 1
              }
            >
              Next
            </button>
          </div>
        {currentQuestionIndex === questions.results.length -1  && <button className="btn-submit" onClick={handleSubmit}>
            Submit Answers
          </button>}
        </>
      ) : (
        <div>
          <h1>Quiz Submitted!</h1>
          <h2>You got {correctAnswersCount} correct answers.</h2>
        </div>
      )}
    </div>
  );
};

export default MCQpage;
