import { XIcon } from "lucide-react";

import { Badge } from "../ui/badge";

export default function BadgeChipModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Badge & Chip
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <div className="flex flex-wrap gap-2">
            <Badge>Padrão</Badge>
            <Badge variant="secondary">Secundário</Badge>
            <Badge variant="destructive">Destrutivo</Badge>
            <Badge variant="outline">Contorno</Badge>
            <Badge variant="ghost">Fantasma</Badge>
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Badges
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="h-7 rounded-full px-3">
              Verão
              <XIcon />
            </Badge>
            <Badge variant="secondary" className="h-7 rounded-full px-3">
              Promoção
              <XIcon />
            </Badge>
            <Badge className="h-7 rounded-full px-3">
              Selecionado
              <XIcon />
            </Badge>
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Chips
          </span>
        </div>
      </div>
    </div>
  );
}
