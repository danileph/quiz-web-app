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
import { progressByTopicsDataTableColumns } from "@/components/progress-monitoring/progress-by-topics/progress-by-topics-data-table-columns";

interface IProgressByTopicsDataTableProps
  extends React.HTMLAttributes<HTMLElement> {}

export const ProgressByTopicsDataTable: FC<
  IProgressByTopicsDataTableProps
> = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const { data: progressByTopics } = useGetProgressByTopics();

  const table = useReactTable({
    data: progressByTopics ?? [],
    columns: progressByTopicsDataTableColumns,
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
