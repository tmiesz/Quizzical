import { decode } from "html-entities";
import clsx from "clsx";

export type QuizProps = {
  answerIds: string[];
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  selected: string | null;
  selectAnswer: (id: string) => void;
};

export default function QuizCard({
  answerIds,
  question,
  correctAnswer,
  incorrectAnswers,
  selected,
  selectAnswer,
}: QuizProps) {
  const numberOfAnswers = incorrectAnswers.length + 1;

  return (
    <div className="quiz-card">
      <h2>{decode(question)}</h2>
      <div className="quiz-answers">
        {Array.from({ length: numberOfAnswers }, (_, i) => (
          <button
            className={clsx(selected === answerIds[i] ? "select" : "")}
            onClick={() => selectAnswer(answerIds[i])}
          >
            {i === numberOfAnswers - 1
              ? decode(correctAnswer)
              : decode(incorrectAnswers[i])}
          </button>
        ))}
      </div>
    </div>
  );
}
