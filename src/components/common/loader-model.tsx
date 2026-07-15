import { Spinner } from "../ui/spinner";

export default function LoaderModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-primary font-semibold text-3xl text-center">
          Loader
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <div className="flex items-center gap-3">
            <Spinner className="size-3" />
            <Spinner className="size-4" />
            <Spinner className="size-6" />
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Tamanhos
          </span>
        </div>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <Spinner className="size-5 text-primary" />
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Cor primária
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <Spinner className="size-4" />
            Carregando...
          </span>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Com texto
          </span>
        </div>
      </div>
    </div>
  );
}
