import React, { FC } from "react";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { useGetProgressByTopics } from "@/api/statistics/getProgressByTopics/useGetProgressByTopics";
import { progressByDaysDataTableColumns } from "@/components/progress-monitoring/progress-by-days/progress-by-days-data-table-columns";
import { useGetProgressByDays } from "@/api/statistics/getProgerssByDays/useGetProgressByDays";

interface IProgressByTopicsDataTableProps
  extends React.HTMLAttributes<HTMLElement> {}

export const ProgressByDaysDataTable: FC<
  IProgressByTopicsDataTableProps
> = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const { data: progressByDays } = useGetProgressByDays();

  const table = useReactTable({
    data: progressByDays ?? [],
    columns: progressByDaysDataTableColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return <DataTable table={table} />;
};
