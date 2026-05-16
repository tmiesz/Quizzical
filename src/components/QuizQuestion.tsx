import clsx from "clsx";
import { decode } from "html-entities";

type Props = {
  answer: string;
  selected: boolean;
};
export default function QuizQuestion({ answer, selected }: Props) {
  return (
    <button className={clsx(selected ? "selected" : "")}>
      {decode(answer)}
    </button>
  );
}
