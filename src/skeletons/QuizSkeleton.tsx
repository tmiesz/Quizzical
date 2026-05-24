import Skeleton from "../ui/Skeleton";
import QuizCardSkeleton from "./QuizCardSkeleton";

export default function QuizSkeleton() {
  return (
    <div className="quiz">
      <QuizCardSkeleton />
      <QuizCardSkeleton />
      <QuizCardSkeleton />
      <QuizCardSkeleton />
      <div className="quiz-submit">
        <Skeleton className="submit" />
      </div>
    </div>
  );
}
