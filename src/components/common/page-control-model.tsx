import { cn } from "@/lib/utils";

export default function PageControlModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Page Control
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3].map((index) => (
              <span
                key={index}
                className={cn(
                  "size-1.5 rounded-full transition-all",
                  index === 1 ? "w-4 bg-primary" : "bg-muted-foreground/30"
                )}
              />
            ))}
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Padrão
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3, 4].map((index) => (
              <span
                key={index}
                className={cn(
                  "size-2 rounded-full",
                  index === 2 ? "bg-primary" : "bg-muted"
                )}
              />
            ))}
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Pontos simples
          </span>
        </div>
      </div>
    </div>
  );
}
