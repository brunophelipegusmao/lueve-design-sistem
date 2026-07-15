import { useState } from "react";
import { ptBR } from "date-fns/locale";

import { Calendar } from "../ui/calendar";

export default function CalendarModel() {
  const [data, setData] = useState<Date | undefined>(new Date());

  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Calendário
        </h2>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <Calendar
            mode="single"
            selected={data}
            onSelect={setData}
            locale={ptBR}
            className="w-fit rounded-lg border border-border"
          />
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Seleção única - em português
          </span>
        </div>
      </div>
    </div>
  );
}
