import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { FC, useState } from "react";
import { Filter } from "lucide-react";
import { FilterWindow } from "@/components/filter-window";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProgressByDaysDataTable } from "@/components/progress-monitoring/progress-by-days/progress-by-days-data-table";
import { ProgressByTopicsDataTable } from "@/components/progress-monitoring/progress-by-topics/progress-by-topics-data-table";

interface IProgressMonitoringProps extends React.HTMLAttributes<HTMLElement> {}

export const ProgressMonitoring: FC<IProgressMonitoringProps> = () => {
  const [isFilterWindowOpened, setIsFilterWindowOpened] = useState(false);

  return (
    <div className={"space-y-4 text-start p-4"}>
      <h1
        className={
          "scroll-m-20 text-2xl font-semibold tracking-tight text-start"
        }
      >
        Мониторинг прогресса
      </h1>
      <Separator className={"mt-1 mb-6"} />
      <div className={"flex items-center space-x-2"}>
        <Tabs className={"w-full"} defaultValue={"by-topics"}>
          <TabsList className={"w-full flex"}>
            <TabsTrigger value={"by-topics"} className={"flex-1"}>
              По темам
            </TabsTrigger>
            <TabsTrigger value={"by-days"} className={"flex-1"}>
              По дням
            </TabsTrigger>
          </TabsList>
          <TabsContent value={"by-topics"} className={"space-y-2 w-full"}>
            <div className={"flex space-x-2 w-full"}>
              <Input placeholder={"Поиск..."} />
              <Button
                size={"icon"}
                variant={"outline"}
                className={"w-12"}
                onClick={() => setIsFilterWindowOpened(true)}
              >
                <Filter className={"h-4 w-4"} />
              </Button>
            </div>
            <ProgressByTopicsDataTable />
            <FilterWindow
              open={isFilterWindowOpened}
              onOpenChange={(value) => setIsFilterWindowOpened(value)}
            />
          </TabsContent>
          <TabsContent value={"by-days"} className={"space-y-2 w-full"}>
            <div className={"flex space-x-2 w-full"}>
              <Input placeholder={"Поиск..."} />
              <Button
                size={"icon"}
                variant={"outline"}
                className={"w-12"}
                onClick={() => setIsFilterWindowOpened(true)}
              >
                <Filter className={"h-4 w-4"} />
              </Button>
            </div>
            <ProgressByDaysDataTable />
            <FilterWindow
              open={isFilterWindowOpened}
              onOpenChange={(value) => setIsFilterWindowOpened(value)}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
