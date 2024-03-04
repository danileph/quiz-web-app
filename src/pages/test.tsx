import { FC, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Question } from "@/models/question";
import { useGetTopic } from "@/api/topics/getTopics/useGetTopic";
import { Link, useParams } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AnswerCard } from "@/components/answer-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ITestPageProps extends React.HTMLAttributes<HTMLElement> {}

export const TestPage: FC<ITestPageProps> = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] =
    useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
  const [correctAnswersAmount, setCorrectAnswersAmount] = useState(0);
  const { topicUrl } = useParams();
  const { data: topic } = useGetTopic(topicUrl);
  const questions = topic?.questions;

  if (!questions) return <></>;

  if (currentQuestion === questions.length) {
    return (
      <div
        className={"p-4 flex flex-col justify-center items-center min-h-screen"}
      >
        <h1
          className={
            "scroll-m-20 text-2xl font-semibold tracking-tight text-start"
          }
        >
          Тест завершен!
        </h1>
        <p>
          {correctAnswersAmount} верных из {questions.length}
        </p>
        <Link to={"/topics"}>
          <Button className={"mt-6"}>Вернуться к темам</Button>
        </Link>
      </div>
    );
  }

  const checkAnswer = () =>
    selectedAnswer &&
    questions[currentQuestion].answers.find((q) => q.id === selectedAnswer)
      ?.isCorrect;

  return (
    <div className={"p-4"}>
      <span className={"block text-muted-foreground text-xs"}>
        {topic?.name}
      </span>
      <h1
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight text-start",
          isCurrentQuestionAnswered
            ? checkAnswer()
              ? "text-green-500/80"
              : "text-red-500/80"
            : undefined
        )}
      >
        Вопрос {currentQuestion + 1}/{questions.length}
        {isCurrentQuestionAnswered
          ? checkAnswer()
            ? " - Верно!"
            : " - Не верно!"
          : undefined}
      </h1>
      <Separator className={"mt-1 mb-6"} />
      <p className={"mb-6"}>{questions[currentQuestion].text}</p>
      <RadioGroup value={selectedAnswer}>
        {questions[currentQuestion].answers.map((answer) => (
          <AnswerCard
            variant={
              isCurrentQuestionAnswered
                ? answer.isCorrect
                  ? "success"
                  : answer.id === selectedAnswer
                  ? checkAnswer()
                    ? "success"
                    : "error"
                  : undefined
                : undefined
            }
            value={answer.id}
            onClick={() =>
              !isCurrentQuestionAnswered && setSelectedAnswer(answer.id)
            }
          >
            {answer.text}
          </AnswerCard>
        ))}
      </RadioGroup>
      {!isCurrentQuestionAnswered ? (
        <Button
          disabled={!selectedAnswer}
          onClick={() => {
            setIsCurrentQuestionAnswered(true);
            if (checkAnswer()) setCorrectAnswersAmount((prev) => prev + 1);
          }}
          className={"w-full mt-6"}
        >
          Ответить
        </Button>
      ) : (
        <Button
          disabled={!selectedAnswer}
          onClick={() => {
            setCurrentQuestion((value) => value + 1);
            setIsCurrentQuestionAnswered(false);
            setSelectedAnswer(undefined);
          }}
          className={"w-full mt-6"}
        >
          Далее
        </Button>
      )}
    </div>
  );
};
