import { useSuspenseQuery } from "@tanstack/react-query";
import QuizCard from "./components/QuizCard";
import { getQuiz } from "./api";

function App() {
  const { data } = useSuspenseQuery({
    queryKey: ["question"],
    queryFn: () => getQuiz(),
  });

  const quiz = data.results.map((item) => (
    <QuizCard
      question={item.question}
      correctAnswer={item.correct_answer}
      incorrectAnswers={item.incorrect_answers}
      choosen={false}
    />
  ));

  return (
    <div className="quiz">
      {quiz}
      <div className="quiz-submit">
        <button>Check answers</button>
      </div>
    </div>
  );
}
export default App;
