import { FC } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Topic } from "@/models/topic";
import { Image } from "lucide-react";

interface ITopicCardProps extends React.HTMLAttributes<HTMLElement> {
  topic: Topic;
}

const TopicCard: FC<ITopicCardProps> = ({ className, topic, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm p-6 w-full text-start grid grid-flow-col gap-4 grid-cols-[80px_auto] items-center",
        className
      )}
      {...props}
    >
      <div
        className={
          "w-[80px] h-[80px] border rounded-lg flex flex-col justify-center items-center"
        }
      >
        <Image className={"w-10 h-10 stroke-[1px]"} />
      </div>
      <p className={"font-semibold leading-tight"}>{topic.name}</p>
    </div>
  );
};

export { TopicCard };
