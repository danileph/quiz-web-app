import { FC } from "react";
import * as React from "react";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
// import NoDataSvg from "@/components/svgs/NoDataSvg";

interface IDataTableProps extends React.HTMLAttributes<HTMLDivElement> {
  table: TableType<any>;
  isLoading?: boolean;
}

export const DataTable: FC<IDataTableProps> = ({ table, isLoading }) => {
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 10 }).map((_, i) => (
                <TableRow key={i}>
                  {table.getAllColumns().map((value, index, array) => (
                    <TableCell key={value.id}>
                      {index !== 0 && index !== array.length - 1 ? (
                        <Skeleton className={"h-4"} />
                      ) : (
                        <></>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell, id, array) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center"
                >
                  <div
                    className={
                      "flex flex-col w-full justify-center items-center p-16"
                    }
                  >
                    {/*<NoDataSvg className={"w-[200px]"} />*/}
                    <p className={"text-md"}>Нет данных</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/*<div className="flex items-center justify-end space-x-2 py-4">*/}
      {/*  <div className="flex-1 text-sm text-muted-foreground">*/}
      {/*    {table.getFilteredSelectedRowModel().rows.length} of{" "}*/}
      {/*    {table.getFilteredRowModel().rows.length} row(s) selected.*/}
      {/*  </div>*/}
      {/*  <div className="space-x-2">*/}
      {/*    <Button*/}
      {/*      variant="outline"*/}
      {/*      size="sm"*/}
      {/*      onClick={() => table.previousPage()}*/}
      {/*      disabled={!table.getCanPreviousPage()}*/}
      {/*    >*/}
      {/*      Previous*/}
      {/*    </Button>*/}
      {/*    <Button*/}
      {/*      variant="outline"*/}
      {/*      size="sm"*/}
      {/*      onClick={() => table.nextPage()}*/}
      {/*      disabled={!table.getCanNextPage()}*/}
      {/*    >*/}
      {/*      Next*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
