import { Question } from "@/models/question";

export type Topic = {
  id: string;
  name: string;
  content: string;
  questions: Question[];
};
