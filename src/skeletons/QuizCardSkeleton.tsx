import Skeleton from "../ui/Skeleton";

export default function QuizCardSkeleton() {
  return (
    <div className="quiz-card">
      <Skeleton className="question" />

      <div className="quiz-answers">
        <Skeleton className="answers" />
        <Skeleton className="answers" />
        <Skeleton className="answers" />
        <Skeleton className="answers" />
      </div>
    </div>
  );
}
