import { decode } from "html-entities";
import clsx from "clsx";
import { useMemo } from "react";

export type QuizProps = {
  answerIds: string[];
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  selected: string | null;
  style: "select" | "correct" | "wrong" | null;
  selectAnswer: (id: string) => void;
};

export default function QuizCard({
  answerIds,
  question,
  correctAnswer,
  incorrectAnswers,
  selected,
  style,
  selectAnswer,
}: QuizProps) {
  const numberOfAnswers = incorrectAnswers.length + 1;
  const correctAnswerPosition = useMemo(
    () => Math.floor(Math.random() * numberOfAnswers),
    [],
  );

  return (
    <div className="quiz-card">
      <h2>{decode(question)}</h2>
      <div className="quiz-answers">
        {Array.from({ length: numberOfAnswers }, (_, i) => (
          <button
            key={answerIds[i]}
            className={clsx(selected === answerIds[i] ? style : "")}
            onClick={() => selectAnswer(answerIds[i])}
          >
            {i === correctAnswerPosition
              ? decode(correctAnswer)
              : decode(incorrectAnswers[i > correctAnswerPosition ? i - 1 : i])}
          </button>
        ))}
      </div>
    </div>
  );
}
