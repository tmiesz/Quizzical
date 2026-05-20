import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="home-page">
      <h1>Welcome to Quizzical!</h1>
      <Link className="start-quiz" to="/quiz">
        Start quiz
      </Link>
    </div>
  );
}
export default MainPage;
