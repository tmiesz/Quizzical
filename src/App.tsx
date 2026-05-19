import { useSuspenseQuery } from "@tanstack/react-query";
import QuizCard, { type QuizProps } from "./components/QuizCard";
import { getQuiz } from "./api";
import { useState } from "react";

function App() {
  const { data } = useSuspenseQuery({
    queryKey: ["question"],
    queryFn: () => getQuiz(),
  });

  const initializeQuiz: QuizProps[] = data.results.map((item) => ({
    question: item.question,
    correctAnswer: item.correct_answer,
    answers: [...item.incorrect_answers, item.correct_answer],
    selectAnswer: selectAnswer,
  }));
  const [quiz, setQuiz] = useState(initializeQuiz);

  function selectAnswer(id: string) {
    let isCorrect = false;

    setQuiz((prev) =>
      prev.map((q) => {
        if (q.answers.includes(id)) {
          isCorrect = q.correctAnswer === id;

          return {
            ...q,
            selected: id,
            style: "select",
          };
        }

        return q;
      }),
    );

    return isCorrect;
  }

  function checkAnswers() {
    setQuiz((prev) =>
      prev.map((q) => ({
        ...q,
        style: q.selected === q.correctAnswer ? "correct" : "wrong",
      })),
    );
  }

  return (
    <div className="quiz">
      {quiz.map((item) => (
        <QuizCard
          key={item.question}
          question={item.question}
          correctAnswer={item.correctAnswer}
          answers={item.answers}
          selected={item.selected}
          style={item.style}
          selectAnswer={item.selectAnswer}
        />
      ))}
      <div className="quiz-submit">
        <button onClick={checkAnswers}>Check answers</button>
      </div>
    </div>
  );
}
export default App;
