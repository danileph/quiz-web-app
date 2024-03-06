import { progressByTopics } from "@/api/statistics/getProgressByTopics/consts";

export const useGetProgressByTopics = () => {
  return { data: progressByTopics };
};
