import { ChevronRightIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

const pedidos = [
  { nome: "Legging Verão", status: "Entregue", cor: "secondary" as const },
  { nome: "Top Cropped", status: "Em trânsito", cor: "outline" as const },
  { nome: "Conjunto Fitness", status: "Processando", cor: "outline" as const },
];

export default function ListModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          List
        </h2>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <ul className="w-80 rounded-lg border border-border">
            {pedidos.map((pedido, index) => (
              <li key={pedido.nome}>
                <div className="flex items-center gap-3 px-3 py-2.5">
                  <Avatar size="sm">
                    <AvatarFallback>{pedido.nome[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-medium">{pedido.nome}</span>
                    <span className="text-xs text-muted-foreground">
                      Pedido #{1000 + index}
                    </span>
                  </div>
                  <Badge variant={pedido.cor}>{pedido.status}</Badge>
                  <ChevronRightIcon className="size-4 text-muted-foreground" />
                </div>
                {index < pedidos.length - 1 && <Separator />}
              </li>
            ))}
          </ul>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Com avatar, badge e separador
          </span>
        </div>
      </div>
    </div>
  );
}
