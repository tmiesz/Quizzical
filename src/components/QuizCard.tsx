type Props = {
  question: string;
};
export default function QuizCard({ question }: Props) {
  return (
    <div className="quiz-card">
      <h2>{question}</h2>
      <div className="quiz-answers">
        <button>Answer 1</button>
        <button>Answer 2</button>
        <button>Answer 3</button>
        <button>Answer 4</button>
      </div>
    </div>
  );
}
