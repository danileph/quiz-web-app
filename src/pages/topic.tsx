import { FC } from "react";
import { useGetTopic } from "@/api/topics/getTopics/useGetTopic";
import { Link, useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface ITopicPageProps extends React.HTMLAttributes<HTMLElement> {}

export const TopicPage: FC<ITopicPageProps> = () => {
  const { topicUrl } = useParams();
  const { data: topic } = useGetTopic(topicUrl);

  return (
    <div className={"p-4"}>
      <h1
        className={
          "scroll-m-20 text-2xl font-semibold tracking-tight text-start"
        }
      >
        {topic?.name}
      </h1>
      <Separator className={"mt-1 mb-6"} />
      <section dangerouslySetInnerHTML={{ __html: topic?.content ?? "" }} />
      <Link to={`/topics/${topic?.id}/test`}>
        <Button className={"mt-6 w-full"}>Пройти тест</Button>
      </Link>
    </div>
  );
};
