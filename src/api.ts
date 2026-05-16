import { triviaApiResponseSchema } from "./schemas/QuizSchema";

export async function getQuiz() {
  const res = await fetch(`https://opentdb.com/api.php?amount=5&type=multiple`);
  const data = await res.json();

  return triviaApiResponseSchema.parse(data);
}
