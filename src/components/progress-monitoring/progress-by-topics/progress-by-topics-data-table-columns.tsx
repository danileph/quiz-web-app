import { ColumnDef } from "@tanstack/react-table";
import { progressByTopics } from "@/api/statistics/getProgressByTopics/consts";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { replaceDotsWithDashes } from "@/lib/helpers/replaceDotsWithDashes";

export const progressByTopicsDataTableColumns: ColumnDef<
  Record<string, string>
>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className={"flex w-full items-center"}>
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className={"flex w-full items-center"}>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  ...(Object.keys(progressByTopics[0]).map((record) => ({
    accessorKey: record,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className={"p-0 hover:bg-transparent"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {record}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue(record)}</div>,
  })) as ColumnDef<Record<string, string>>[]),
];
