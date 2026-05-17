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
  return (
    <div className="quiz-card">
      <h2>{decode(question)}</h2>
      <div className="quiz-answers">
        <button
          className={clsx(selected === answerIds[0] ? "selected" : "")}
          onClick={() => selectAnswer(answerIds[0])}
        >
          {decode(incorrectAnswers[0])}
        </button>
        <button
          className={clsx(selected === answerIds[1] ? "selected" : "")}
          onClick={() => selectAnswer(answerIds[1])}
        >
          {decode(incorrectAnswers[1])}
        </button>
        <button
          className={clsx(selected === answerIds[2] ? "selected" : "")}
          onClick={() => selectAnswer(answerIds[2])}
        >
          {decode(incorrectAnswers[2])}
        </button>
        <button
          className={clsx(selected === answerIds[3] ? "selected" : "")}
          onClick={() => selectAnswer(answerIds[3])}
        >
          {decode(correctAnswer)}
        </button>
      </div>
    </div>
  );
}
