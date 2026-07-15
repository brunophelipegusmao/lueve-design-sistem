import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function DatePickerModel() {
  const [nascimento, setNascimento] = useState<Date | undefined>();
  const [periodo, setPeriodo] = useState<Date | undefined>(new Date());

  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Date Picker
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <Popover>
            <PopoverTrigger
              render={<Button variant="outline" className="w-56 justify-start" />}
            >
              <CalendarIcon data-icon="inline-start" />
              {nascimento
                ? format(nascimento, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                : "Selecione uma data"}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={nascimento}
                onSelect={setNascimento}
                locale={ptBR}
              />
            </PopoverContent>
          </Popover>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Vazio por padrão
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <Popover>
            <PopoverTrigger
              render={<Button variant="outline" className="w-56 justify-start" />}
            >
              <CalendarIcon data-icon="inline-start" />
              {periodo
                ? format(periodo, "dd/MM/yyyy", { locale: ptBR })
                : "Selecione uma data"}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={periodo}
                onSelect={setPeriodo}
                locale={ptBR}
              />
            </PopoverContent>
          </Popover>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Com valor pré-selecionado
          </span>
        </div>
      </div>
    </div>
  );
}
