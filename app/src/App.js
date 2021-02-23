import React, { useState } from "react";
import styled from "styled-components";

export default function App() {
  const waitTime = 750;
  const questions = [
    //Question 1
    {
      questionText: "Which player is nicknamed 'The Great One'?",
      answerOptions: [
        { answerText: "Sidney Crosby", isCorrect: false },
        { answerText: "Bobby Orr", isCorrect: false },
        { answerText: "Wayne Gretzky", isCorrect: true },
        { answerText: "Maurice Richard", isCorrect: false },
      ],
    },
    //Question 2
    {
      questionText: "What is the most goals scored in a single NHL season?",
      answerOptions: [
        { answerText: "101", isCorrect: false },
        { answerText: "92", isCorrect: true },
        { answerText: "89", isCorrect: false },
        { answerText: "106", isCorrect: false },
      ],
    },
    //Question 3
    {
      questionText:
        "Which player won the Hart trophy and the Conn Smythe trophy in the same season, and then repeated the feat a second time?",
      answerOptions: [
        { answerText: "Bobby Orr", isCorrect: true },
        { answerText: "Zedeno Chara", isCorrect: false },
        { answerText: "Chris Chelios", isCorrect: false },
        { answerText: "Shea Weber", isCorrect: false },
      ],
    },
    //Question 4
    {
      questionText:
        "The first outdoor NHL regular season game happened in 2003. Which city hosted it?",
      answerOptions: [
        { answerText: "Montreal", isCorrect: false },
        { answerText: "Buffalo", isCorrect: false },
        { answerText: "Pittsburgh", isCorrect: false },
        { answerText: "Edmonton", isCorrect: true },
      ],
    },
    //Question 5
    {
      questionText: "What is a Gordie Howe hat-trick?",
      answerOptions: [
        { answerText: "3 goals", isCorrect: false },
        { answerText: "1 goal, 1 assist, 1 penalty", isCorrect: false },
        { answerText: "1 goal, 1 assist, 1 fight", isCorrect: true },
        { answerText: "2 goals, 1 assist", isCorrect: false },
      ],
    },
    //Question 6
    {
      questionText:
        "Out of the following players, which one has won a Calder Trophy (rookie of the year)?",
      answerOptions: [
        { answerText: "Luc Robitaille", isCorrect: true },
        { answerText: "Matt Duchene", isCorrect: false },
        { answerText: "Eric Lindros", isCorrect: false },
        { answerText: "John Tavares", isCorrect: false },
      ],
    },
    //Question 7
    {
      questionText: "Which player has the highest career NHL earnings?",
      answerOptions: [
        { answerText: "Martin Brodeur", isCorrect: false },
        { answerText: "Alexander Ovechkin", isCorrect: false },
        { answerText: "Luc Robitaille", isCorrect: false },
        { answerText: "Jaromir Jagr", isCorrect: true },
      ],
    },
    //Question 8
    {
      questionText: "What is the area immediately in front of the goal called?",
      answerOptions: [
        { answerText: "The Net", isCorrect: false },
        { answerText: "The Hemisphere", isCorrect: false },
        { answerText: "The Angle", isCorrect: false },
        { answerText: "The Crease", isCorrect: true },
      ],
    },
    //Question 9
    {
      questionText:
        "Who are the officials who determine if a play is offsides called?",
      answerOptions: [
        { answerText: "Linesmen", isCorrect: true },
        { answerText: "Assistant Referees", isCorrect: false },
        { answerText: "Refereese", isCorrect: false },
        { answerText: "Spotters", isCorrect: false },
      ],
    },
    //Question 10
    {
      questionText:
        "Which NHL player was the first to score 50 goals in 50 games?",
      answerOptions: [
        { answerText: "Mario Lemieux", isCorrect: false },
        { answerText: "Maurice Richard", isCorrect: true },
        { answerText: "Wayne Gretzky", isCorrect: false },
        { answerText: "Mark Messier", isCorrect: false },
      ],
    },
    //Question 11
    {
      questionText:
        "Which team captain guaranteed a Game 6 win for his team to push the series to Game 7?",
      answerOptions: [
        { answerText: "Nicklas Lidstrom", isCorrect: false },
        { answerText: "Maurice Richard", isCorrect: false },
        { answerText: "Mark Messier", isCorrect: true },
        { answerText: "Sidney Crosby", isCorrect: false },
      ],
    },
    //Question 12
    {
      questionText:
        "Which goalie currently holds the record for most shutouts (125) in his career?",
      answerOptions: [
        { answerText: "Terry Sawchuk", isCorrect: false },
        { answerText: "Martin Brodeur", isCorrect: true },
        { answerText: "Jacques Plante", isCorrect: false },
        { answerText: "Roberto Luongo", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [optionIndex, setOptionIndex] = useState(null);
  // const scoreSentence;

  const handleAnswerOptionClick = (isCorrect, index) => {
    // If user already selected one option, stop the function immediately
    if (showCorrectAnswer) {
      return;
    }

    if (isCorrect) {
      setScore(score + 1);
    }

    // Updates selected option and show right/wrong answers
    setShowCorrectAnswer(true);
    setOptionIndex(index);

    const nextQuestion = currentQuestion + 1;

    // Show state to user and go to next question after some time
    setTimeout(() => {
      setShowCorrectAnswer(false);

      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, waitTime);
  };

  const scoreSentence = (score) => {
    let i = score;
    let result;
    // debugger;

    if (i <= 6) {
      result = "Not good enough you only scored: ";
    } else if (i >= 7 && i <= 9) {
      result = "Not bad, you scored:";
    } else if (i >= 10 && i <= 11) {
      result = "Great job, you really know your hockey trivia, you scored:";
    } else {
      result = "Congradulations, hockey pro, you got a perfect score of ";
    }
    return result;
  };

  function reloadThePage() {
    window.location.reload();
  }
  return (
    <>
      <div className="title">Hockey Trivia</div>

      <div className="app">
        {showScore ? (
          <div className="score-section">
            {scoreSentence(score)} {score} out of {questions.length}
            <button onClick={reloadThePage}>Restart the Quiz</button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    className={
                      showCorrectAnswer
                        ? answerOption.isCorrect
                          ? "correct"
                          : optionIndex === index
                          ? "incorrect"
                          : ""
                        : ""
                    }
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect, index)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
