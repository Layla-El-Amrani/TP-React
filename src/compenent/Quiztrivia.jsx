import React, { useState } from 'react';
import './style/Quiztrivia.css';  // Importation du CSS

export default function Quiztrivia() {
    const [currentQuestionsIndex, setCurrentQuestionsIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [quizFinished, setQuizFinished] = useState(false);
    const [userAnswer, setUserAnswer] = useState(null);

    const questions = [
        { question: 'Quel est le capital de la France ?', answers: ["Paris", "Londres", "Berlin", "Madrid"], correctAnswer: 'Paris' },
        { question: "Combien de continents existe-t-il sur Terre ?", answers: ["4", "5", "6", "7"], correctAnswer: "7" },
        { question: "Qui a écrit 'Les Misérables' ?", answers: ["Victor Hugo", "Albert Camus", "Marcel Proust", "Émile Zola"], correctAnswer: "Victor Hugo" }
    ];

    const handleAnswer = (answer) => {
        setUserAnswer(answer);
        if (answer === questions[currentQuestionsIndex].correctAnswer) {
            setScore(score + 1);
        }
        setIsAnswered(true);
        setTimeout(() => {
            if (currentQuestionsIndex < questions.length - 1) {
                setCurrentQuestionsIndex(currentQuestionsIndex + 1);
            } else {
                setQuizFinished(true);
            }
            setIsAnswered(false);
            setUserAnswer(null);
        }, 1000);
    };

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">Trivia Quiz</h1>
            {!quizFinished ? (
                <div className="question-container">
                    <h2 className="quiz-question">{questions[currentQuestionsIndex].question}</h2>
                    <div className="answers-container">
                        {questions[currentQuestionsIndex].answers.map((answer, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(answer)}
                                className="answer-button"
                                disabled={isAnswered}
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                    {isAnswered && (
                        <p className={`answer-feedback ${userAnswer === questions[currentQuestionsIndex].correctAnswer ? 'correct' : 'incorrect'}`}>
                            {userAnswer === questions[currentQuestionsIndex].correctAnswer ? 'Correct!' : 'Incorrect!'}
                        </p>
                    )}
                </div>
            ) : (
                <div className="quiz-finished">
                    <h2>Quiz terminé</h2>
                    <p className="quiz-score">Votre score : {score} / {questions.length}</p>
                </div>
            )}
        </div>
    );
}
