import { FC } from "react";
import { useGetTopics } from "@/api/topics/getTopics/useGetTopics";
import { TopicCard } from "@/components/topic-card";
import { Link } from "react-router-dom";

interface ITopicsPageProps extends React.HTMLAttributes<HTMLElement> {}

export const TopicsPage: FC<ITopicsPageProps> = () => {
  const { data: topics } = useGetTopics();

  return (
    <div className={"flex flex-col space-y-4 p-4"}>
      {topics.map((topic) => (
        <Link to={`/topics/${topic.id}`} key={topic.id}>
          <TopicCard topic={topic} />
        </Link>
      ))}
    </div>
  );
};
