import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const passos = [
  { label: "Carrinho", state: "done" as const },
  { label: "Entrega", state: "done" as const },
  { label: "Pagamento", state: "current" as const },
  { label: "Confirmação", state: "upcoming" as const },
];

export default function StepperModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-primary font-semibold text-3xl text-center">
          Stepper
        </h2>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <div className="flex w-96 items-center">
            {passos.map((passo, index) => (
              <div key={passo.label} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className={cn(
                      "flex size-7 items-center justify-center rounded-full border text-xs font-medium",
                      passo.state === "done" &&
                        "border-primary bg-primary text-primary-foreground",
                      passo.state === "current" &&
                        "border-primary text-primary",
                      passo.state === "upcoming" &&
                        "border-border text-muted-foreground"
                    )}
                  >
                    {passo.state === "done" ? (
                      <CheckIcon className="size-3.5" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs whitespace-nowrap",
                      passo.state === "upcoming"
                        ? "text-muted-foreground"
                        : "text-foreground"
                    )}
                  >
                    {passo.label}
                  </span>
                </div>
                {index < passos.length - 1 && (
                  <div
                    className={cn(
                      "mx-2 mb-5 h-px flex-1",
                      passo.state === "done" ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Checkout em 4 etapas
          </span>
        </div>
      </div>
    </div>
  );
}
