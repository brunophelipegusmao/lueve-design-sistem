import { Switch } from "../ui/switch";

export default function ToggleModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Toggle
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <label className="flex items-center gap-2 text-sm">
            <Switch name="notificacoes" defaultChecked />
            Notificações
          </label>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Ativo
          </span>
        </div>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <label className="flex items-center gap-2 text-sm">
            <Switch name="localizacao" />
            Localização
          </label>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Inativo
          </span>
        </div>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <label className="flex items-center gap-2 text-sm">
            <Switch name="modo-compacto" size="sm" defaultChecked />
            Modo compacto
          </label>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Tamanho pequeno
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <label className="flex items-center gap-2 text-sm opacity-50">
            <Switch name="beta" disabled />
            Recursos beta
          </label>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Desativado
          </span>
        </div>
      </div>
    </div>
  );
}
