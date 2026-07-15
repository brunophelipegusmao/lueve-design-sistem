import { CircleAlertIcon, CircleCheckIcon, InfoIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export default function AlertModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-primary font-semibold text-3xl text-center">
          Alertas
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <Alert className="w-80">
            <InfoIcon />
            <AlertTitle>Informação</AlertTitle>
            <AlertDescription>
              Seu pedido está sendo processado.
            </AlertDescription>
          </Alert>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Padrão
          </span>
        </div>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <Alert className="w-80">
            <CircleCheckIcon />
            <AlertTitle>Sucesso</AlertTitle>
            <AlertDescription>
              Suas alterações foram salvas com sucesso.
            </AlertDescription>
          </Alert>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Sucesso
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <Alert variant="destructive" className="w-80">
            <CircleAlertIcon />
            <AlertTitle>Erro</AlertTitle>
            <AlertDescription>
              Não foi possível concluir a operação.
            </AlertDescription>
          </Alert>
          <span className="text-xs font-medium uppercase tracking-wide text-destructive">
            Destrutivo
          </span>
        </div>
      </div>
    </div>
  );
}
