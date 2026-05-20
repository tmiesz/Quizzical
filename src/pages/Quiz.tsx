import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getQuiz } from "../api";
import type { QuizProps } from "../components/QuizCard";
import QuizCard from "../components/QuizCard";

function Quiz() {
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

  const concludeGame = quiz.every(
    (q) => (q.selected && q.style === "correct") || q.style === "wrong",
  );

  //TODO: BUG this breaks if two questions have the same answer text
  function selectAnswer(answer: string) {
    setQuiz((prev) =>
      prev.map((q) =>
        q.answers.includes(answer)
          ? { ...q, selected: answer, style: "select" }
          : q,
      ),
    );
  }

  function checkAnswers() {
    setQuiz((prev) =>
      prev.map((q) => ({
        ...q,
        style: q.selected === q.correctAnswer ? "correct" : "wrong",
      })),
    );
  }

  function restartGame(): void {
    setQuiz(initializeQuiz);
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
      {!concludeGame && (
        <div className="quiz-submit">
          <button onClick={checkAnswers}>Check answers</button>
        </div>
      )}
      {concludeGame && (
        <div className="quiz-submit">
          You scored {quiz.filter((q) => q.selected === q.correctAnswer).length}
          /5 corrent answers. <button onClick={restartGame}>Play again</button>
        </div>
      )}
    </div>
  );
}
export default Quiz;
