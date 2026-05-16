import QuizCard from "./components/QuizCard";

function App() {
  return (
    <div className="quiz">
      <QuizCard question="Question 1?" />
      <QuizCard question="Question 2?" />
      <QuizCard question="Question 3?" />
      <div className="quiz-submit">
        <button>Check answers</button>
      </div>
    </div>
  );
}
export default App;
