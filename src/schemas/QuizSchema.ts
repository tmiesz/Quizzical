import { z } from "zod";

export const triviaQuestionSchema = z.object({
  type: z.literal("multiple"),
  difficulty: z.enum(["easy", "medium", "hard"]),
  category: z.string(),
  question: z.string(),
  correct_answer: z.string(),
  incorrect_answers: z.array(z.string()),
});

export const triviaApiResponseSchema = z.object({
  response_code: z.number(),
  results: z.array(triviaQuestionSchema),
});
