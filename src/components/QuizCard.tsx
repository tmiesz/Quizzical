import { decode } from "html-entities";

type Props = {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
};
export default function QuizCard({
  question,
  correctAnswer,
  incorrectAnswers,
}: Props) {
  return (
    <div className="quiz-card">
      <h2>{decode(question)}</h2>
      <div className="quiz-answers">
        <button>{decode(correctAnswer)}</button>
        <button>{decode(incorrectAnswers[0])}</button>
        <button>{decode(incorrectAnswers[1])}</button>
        <button>{decode(incorrectAnswers[2])}</button>
      </div>
    </div>
  );
}
