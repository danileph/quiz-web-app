import {Answer} from "@/models/answer";

export type Question = {
  id: string;
  number: number;
  text: string;
  answers: Answer[]
}