import { FC } from "react";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

interface IAnswerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  variant?: "default" | "success" | "error";
}

export const AnswerCard: FC<IAnswerCardProps> = ({
  children,
  value,
  className,
  variant = "default",
  ...props
}) => {
  return (
    <div
      className={cn(
        `grid grid-flow-col grid-cols-[auto,30px] items-center space-x-2 rounded-lg border bg-card text-card-foreground shadow-sm p-6 w-full`,
        variant === "success" && "border-green-500/80",
        variant === "error" && "border-red-500/80",
        className
      )}
      {...props}
    >
      <Label
        htmlFor={value}
        className={cn(
          variant === "success" && "text-green-500/80",
          variant === "error" && "text-red-500/80"
        )}
      >
        {children}
      </Label>
      {variant !== "default" ? (
        <div
          className={cn(
            "flex items-center justify-center rounded-full border w-[16px] h-[16px]",
            variant === "success" && "border-green-500/80 text-green-500/80",
            variant === "error" && "border-red-500/80 text-red-500/80"
          )}
        >
          {variant === "error" ? (
            <Plus className="h-3.5 w-3.5 fill-primary rotate-45" />
          ) : (
            <CheckIcon className="h-3.5 w-3.5 fill-primary" />
          )}
        </div>
      ) : (
        <RadioGroupItem variant={variant} value={value} id={value} />
      )}
    </div>
  );
};
