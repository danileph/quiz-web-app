import { topics } from "@/api/topics/const";

export const useGetTopic = (id: string | undefined) => {
  const foundTopic = topics.find((topic) => topic.id === id);

  return { data: foundTopic };
};
