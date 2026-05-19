import { decode } from "html-entities";
import clsx from "clsx";
import { useMemo } from "react";

export type QuizProps = {
  question: string;
  correctAnswer: string;
  answers: string[];
  selected?: string;
  style?: "select" | "correct" | "wrong";
  selectAnswer: (id: string) => boolean;
};

export default function QuizCard({
  question,
  correctAnswer,
  answers,
  selected,
  style,
  selectAnswer,
}: QuizProps) {
  const numberOfAnswers = answers.length;
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
            key={answers[i]}
            className={clsx(selected === answers[i] ? style : "")}
            onClick={() => selectAnswer(answers[i])}
          >
            {i === correctAnswerPosition
              ? decode(correctAnswer)
              : decode(answers[i > correctAnswerPosition ? i - 1 : i])}
          </button>
        ))}
      </div>
    </div>
  );
}
