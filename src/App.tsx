import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizSkeleton from "./skeletons/QuizSkeleton";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={
            <Suspense fallback={<QuizSkeleton />}>
              <Quiz />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
