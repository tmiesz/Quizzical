import { useSuspenseQuery } from "@tanstack/react-query";
import QuizCard, { type QuizProps } from "./components/QuizCard";
import { getQuiz } from "./api";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const { data } = useSuspenseQuery({
    queryKey: ["question"],
    queryFn: () => getQuiz(),
  });

  const initializeQuiz: QuizProps[] = data.results.map((item) => ({
    answerIds: Array.from({ length: 4 }, () => uuidv4()),
    question: item.question,
    correctAnswer: item.correct_answer,
    incorrectAnswers: item.incorrect_answers,
    selected: null,
    selectAnswer: selectAnswer,
  }));
  const [quiz, setQuiz] = useState(initializeQuiz);

  function selectAnswer(id: string) {
    setQuiz((prev) =>
      prev.map((q) => (q.answerIds.includes(id) ? { ...q, selected: id } : q)),
    );
  }

  return (
    <div className="quiz">
      {quiz.map((item) => (
        <QuizCard
          answerIds={item.answerIds}
          question={item.question}
          correctAnswer={item.correctAnswer}
          incorrectAnswers={item.incorrectAnswers}
          selected={item.selected}
          selectAnswer={item.selectAnswer}
        />
      ))}
      <div className="quiz-submit">
        <button>Check answers</button>
      </div>
    </div>
  );
}
export default App;
