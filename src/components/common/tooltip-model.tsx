import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function TooltipModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Tooltip
        </h2>

        <TooltipProvider>
          <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" />}>
                Passe o mouse
              </TooltipTrigger>
              <TooltipContent>Dica no topo</TooltipContent>
            </Tooltip>
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Topo (padrão)
            </span>
          </div>

          <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
            <Tooltip>
              <TooltipTrigger render={<Button variant="ghost" />}>
                Ajuda
              </TooltipTrigger>
              <TooltipContent side="right">
                Explicação adicional aqui
              </TooltipContent>
            </Tooltip>
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              À direita
            </span>
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
}
