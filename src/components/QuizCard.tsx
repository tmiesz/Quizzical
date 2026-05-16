import { decode } from "html-entities";
import QuizQuestion from "./QuizQuestion";

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
        <QuizQuestion answer={correctAnswer} selected={true} />
        <QuizQuestion answer={incorrectAnswers[0]} selected={false} />
        <QuizQuestion answer={incorrectAnswers[1]} selected={false} />
        <QuizQuestion answer={incorrectAnswers[2]} selected={false} />
      </div>
    </div>
  );
}
