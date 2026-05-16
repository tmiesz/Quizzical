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
      <h2>{question}</h2>
      <div className="quiz-answers">
        <button>{correctAnswer}</button>
        <button>{incorrectAnswers[0]}</button>
        <button>{incorrectAnswers[1]}</button>
        <button>{incorrectAnswers[2]}</button>
      </div>
    </div>
  );
}
