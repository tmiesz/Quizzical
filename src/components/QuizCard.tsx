import { decode } from "html-entities";
import clsx from "clsx";
import { useMemo } from "react";

export type QuizProps = {
  question: string;
  correctAnswer: string;
  answers: string[];
  selected?: string;
  style?: "select" | "correct" | "wrong";
  selectAnswer: (id: string) => void;
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
        {Array.from({ length: numberOfAnswers }, (_, i) => {
          const isCorrectSlot = i === correctAnswerPosition;
          const answerId = isCorrectSlot
            ? correctAnswer
            : answers[i > correctAnswerPosition ? i - 1 : i];

          return (
            <button
              key={answerId}
              className={
                "quiz-answers-button" + clsx(selected === answerId ? style : "")
              }
              onClick={() => selectAnswer(answerId)}
            >
              {decode(answerId)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
