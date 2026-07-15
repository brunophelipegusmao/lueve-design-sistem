import { Checkbox } from "../ui/checkbox";

export default function CheckboxModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Checkbox
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <label className="flex items-center gap-2 text-sm">
            <Checkbox name="termos" />
            Aceito os termos
          </label>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Padrão
          </span>
        </div>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <label className="flex items-center gap-2 text-sm">
            <Checkbox name="newsletter" defaultChecked />
            Receber newsletter
          </label>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Marcado
          </span>
        </div>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <label className="flex items-center gap-2 text-sm">
            <Checkbox name="invalido" aria-invalid defaultChecked />
            Campo obrigatório
          </label>
          <span className="text-xs font-medium uppercase tracking-wide text-destructive">
            Erro - inválido
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <label className="flex items-center gap-2 text-sm opacity-50">
            <Checkbox name="desativado" disabled />
            Indisponível
          </label>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Desativado
          </span>
        </div>
      </div>
    </div>
  );
}
