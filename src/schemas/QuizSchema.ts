import { z } from "zod";

export const quizApiResponseSchema = z.object({
  response_code: z.number(),
  results: z.array(
    z.object({
      type: z.literal("multiple"),
      difficulty: z.enum(["easy", "medium", "hard"]),
      category: z.string(),
      question: z.string(),
      correct_answer: z.string(),
      incorrect_answers: z.array(z.string()),
    }),
  ),
});
